import styled from "@emotion/styled"
import { mq, $projectImgWidth } from "../../../styles/emotion"

export const GalleryContainer = styled("main")`
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;*/
  justify-content: space-between;
  gap: 5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  ${mq("md")} {
    grid-template-columns: 1fr;

    gap: 0;
  }
`
export const GalleryImage = styled.div`
  /* flex: 0 0 ${$projectImgWidth}; */
  width: 100%;
  .ui-image {
    aspect-ratio: 1 /1;
  }

  ${mq("md")} {
    flex: 1;
    margin-bottom: 2rem;
    .ui-image {
      width: 100% !important;
      height: 100% !important;
    }
  }
`
export const BriefName = styled.div`
  flex: 0 1 20%;
  text-transform: uppercase;
  ${mq("md")} {
    flex: 0 1 35%;
  }
`
export const BriefDescription = styled.div`
  flex: 1;
  max-width: 345px;
  white-space: pre-line;
`
