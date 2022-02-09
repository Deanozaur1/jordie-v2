import classNames from "classnames"
import { graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import { JordiePageFC } from "../@types"
import { Image } from "../components"
import { rcEncodeUri, useDidUpdateEffect } from "../hooks"
import config from "../../config"
import "../styles/pages/inquire.scss"

const Inquire: JordiePageFC = ({ data }) => {
  console.log(data)
  const [inquire, setInquire] = React.useState(null)
  const [completed, setCompleted] = React.useState(false)
  const [formError, setFormError] = React.useState(false)

  const handleChange = (e) => {
    setInquire({ ...inquire, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inquire || !inquire.name || !inquire.email) return
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
    <React.Fragment>
      <Helmet titleTemplate={`${config.siteMetadata.shortName} - %s`}>
        <title>Inquire</title>
      </Helmet>

      <Image src={data.bg} alt="background" containerClassName="inquire__bg" />

      <div className="form__container container">
        <form
          name="inquire"
          method="post"
          className={classNames([
            "inquire__form",
            { "inquire__form--completed": completed },
          ])}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="inquire" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </div>
          <div className="inquire__form-field inquire__form-field--flex">
            <input
              className="inquire__form-field__input"
              type={"text"}
              name={"first_name"}
              id={"last_name"}
              placeholder="First Name"
              onChange={handleChange}
              required={true}
              disabled={completed}
            />
            <input
              className="inquire__form-field__input"
              type={"text"}
              name={"last_name"}
              id={"last_name"}
              placeholder="Last Name"
              onChange={handleChange}
              required={true}
              disabled={completed}
            />
          </div>
          <div className="inquire__form-field">
            <input
              className="inquire__form-field__input"
              type={"email"}
              name={"email"}
              id={"email"}
              placeholder="Email Address"
              onChange={handleChange}
              required={true}
              disabled={completed}
            />
          </div>
          <div className="inquire__form-field">
            <textarea
              className="inquire__form-field__input"
              name={"message"}
              id={"message"}
              placeholder="Write me a message"
              onChange={handleChange}
              required={true}
              disabled={completed}
            />
          </div>
          <div className="inquire__submit">
            {completed ? (
              <div className="form__complete">
                <p>{completedText}</p>
              </div>
            ) : null}
            <button
              type="submit"
              data-text={ctaText}
              disabled={completed}
              className="line-link"
            >
              <span>{ctaText}</span>
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

Inquire.layoutProps = {

  className: "inquire",
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
