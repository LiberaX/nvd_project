import Nav from "./Nav";
import IconFacebook from "./ui/IconFacebook";
import IconTwitter from "./ui/IconTwitter";
import IconInstagram from "./ui/IconInstagram";
import Container from "./ui/Container";

export default function Footer({ className }) {
  return (
    <footer className={`pb-[50px] pt-[75px] bg-darkGray ${className}`}>
      <Container>
        <div className="flex justify-between items-center">
          <img src="/public/logo.png" alt="Logo" />
          <Nav />
        </div>
        <div className="mt-[35px] flex justify-between items-end">
          <p className="p opacity-50 text-white w-[540px]">
            Audiophile is an all in one stop to fulfill your audio needs. We’re
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="flex gap-[15px] items-center">
            <IconFacebook />
            <IconTwitter />
            <IconInstagram />
          </div>
        </div>
        <div className="mt-[55px]">
          <p className="p font-bold text-white opacity-50">
            Copyright 2024. All Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}
