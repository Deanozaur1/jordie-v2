import classNames from "classnames"
import { graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import { JordiePageFC } from "../@types"
import { Image } from "../components"
import { rcEncodeUri, useDidUpdateEffect } from "../hooks"
import config from "../../config"
import {
  InquireBG,
  InquireForm,
  InquireFormFieldFlex,
  InquireFormFieldInput,
  InquirePageWrapper,
  InquireSubmit,
} from "../styles/pages/inquire"
import { BGVariants, itemSlideVariants, listVariants } from "../styles/emotion"
import { motion } from "framer-motion"
const Inquire: JordiePageFC = ({ data }) => {
  const [inquire, setInquire] = React.useState(null)
  const [completed, setCompleted] = React.useState(false)
  const [formError, setFormError] = React.useState(false)

  const handleChange = (e) => {
    setInquire({ ...inquire, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inquire || !inquire.first_name || !inquire.email) return

    const form = e.target

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: rcEncodeUri({
        "form-name": form.getAttribute("name"),
        ...inquire,
      }),
    })
      .then(({ ok }) => !ok && setFormError(true))
      .finally(() => setCompleted(true))
  }

  const { ctaText, completedText } = {
    get ctaText() {
      if (!completed) return "Send"
      else if (formError) return ":("
      else return ":)"
    },
    get completedText() {
      if (formError) return "Please try again later"
      else
        return "Thank you for your message. I will get back to you as soon\n as possible."
    },
  }

  return (
    <InquirePageWrapper>
      <Helmet titleTemplate={`${config.siteMetadata.shortName} - %s`}>
        <title>Inquire</title>
      </Helmet>

      <InquireBG {...BGVariants(false)}>
        <Image src={data.bg} alt="background" />
      </InquireBG>

      <div className="container" css={{ zIndex: 3 }}>
        <InquireForm
          name="inquire"
          method="post"
          className={classNames([
            "inquire__form",
            { "inquire__form--completed": completed },
          ])}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          {...listVariants}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="inquire" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </div>

          <InquireFormFieldFlex variants={itemSlideVariants}>
            <motion.input
              css={InquireFormFieldInput}
              type={"text"}
              name={"first_name"}
              id={"last_name"}
              placeholder="First Name"
              onChange={handleChange}
              required={true}
              disabled={completed}
            />
            <motion.input
              css={InquireFormFieldInput}
              type={"text"}
              name={"last_name"}
              id={"last_name"}
              placeholder="Last Name"
              onChange={handleChange}
              required={true}
              disabled={completed}
            />
          </InquireFormFieldFlex>

          <motion.div variants={itemSlideVariants}>
            <motion.input
              css={InquireFormFieldInput}
              type={"email"}
              name={"email"}
              id={"email"}
              placeholder="Email Address"
              onChange={handleChange}
              required={true}
              disabled={completed}
            />
          </motion.div>
          <motion.div variants={itemSlideVariants}>
            <motion.textarea
              css={InquireFormFieldInput}
              name={"message"}
              id={"message"}
              placeholder="Write me a message"
              onChange={handleChange}
              required={true}
              disabled={completed}
            />
          </motion.div>
          <InquireSubmit variants={itemSlideVariants}>
            {completed ? (
              <div className="form__complete">
                <p>{completedText}</p>
              </div>
            ) : null}
            <motion.button
              type="submit"
              data-text={ctaText}
              disabled={completed}
              className="line-link"
            >
              <span>{ctaText}</span>
            </motion.button>
          </InquireSubmit>
        </InquireForm>
      </div>
    </InquirePageWrapper>
  )
}

Inquire.layoutProps = {
  transparentBg: true,
}

export default Inquire

export const pageQuery = graphql`
  query InquireQuery {
    bg: file(relativePath: { eq: "heros/inquire-bg.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
