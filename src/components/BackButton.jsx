import { useNavigate } from "react-router-dom";
import Container from "./ui/Container";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Container>
      <button className="btn-link mt-10" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </Container>
  );
}
