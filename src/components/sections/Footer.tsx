import { ImageSwitch } from "@/components/ImageSwitch";

export function Footer() {
  return (
    <div id="footer" className="tf-footer flat-spacing">
      <div className="block-quote effectFade fadeUp no-div">
        <h5 className="quote-text font-3 fw-normal text-black-72">
          <span className="text-black-56">“</span>
Make it work, make it right, make it fast.
          <span className="text-black-56">“</span>
        </h5>
        <p className="quote-author font-3 text-black-56 h6 text-end">Kent Beck</p>
      </div>
      <div className="br-line" />
      <div className="foot-inner">
        <div className="isak effectFade fadeUp no-div">
     <h1 className="display-1 fw-bold text-black-72">
    FARAZ
</h1>
        </div>
        <a href="#home" className="f-logo effectFade fadeZoom" aria-label="Back to top">
          <div className="logo">
            <ImageSwitch
              light="/assets/images/logo/faraz-logo.svg"
              dark="/assets/images/logo/faraz-logo-dark.svg"
              width={32}
              height={32}
            />
          </div>
        </a>
      </div>
      <div className="foot-bottom">
        <p className="text-nocopy text-black-56 effectFade fadeUp no-div">
          All rights reserved <br />© 2026 Faraz Portfolio
        </p>
        <div className="isak effectFade fadeUp no-div">
    <h1 className="display-1 fw-bold text-black-72">
    FAWZEER
</h1>
        </div>
      </div>
    </div>
  );
}
