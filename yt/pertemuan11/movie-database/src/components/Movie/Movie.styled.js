import styled from "styled-components";

const StyledMovie = () => {
  const StyledMovie = styled.div`
    margin-bottom: 1rem;

    h3 {
      margin-bottom: 1rem;
      font-size: 2.44rem;
      color: #4361ee;
    }

    img {
      border-radius: 25px;
      max-width: 100%;
      height: auto;
      margin-bottom: 1rem;
    }

    p {
      color: #64748b;
    }

    /* Medium Screen */
    @media (min-width: 768px) {
      flex-basis: 50%;
    }

    /* Large Screen */
    @media (min-width: 992px) {
      flex-basis: 25%;
      padding: 1rem;
    }
  `;
};
export default StyledMovie;
