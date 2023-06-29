
function App() {
  return (
    <>
      <p className="layout-md text-black text-xl leading-tight font-light mb-16" id="-is">
        <span className="g">is a</span> software engineer<span className="g">,</span>
        <br />
        researcher<span className="g">, and</span>
        <br />
        designer<span className="g">.</span>
      </p>

      <div className="layout-md text-lg space-y-14">
        <div className="space-y-5">
          <p>
            I currently work on the future of cloud computing at{" "}
            <a className="link" href="https://modal.com">
              Modal
            </a>
            .
          </p>

          <p>
            My ambition is to make better <em>interactive software</em> that helps people
            create, collaborate, learn, and meaningfully express what brings them joy.
          </p>

          <p>
            Towards that goal, I am a generalist and care deeply about <em>systems</em>, which form
            the fundamental building blocks of our applications; and <em>interaction design</em>,
            how we use and live with computers that are all around us.
          </p>
        </div>


          <p>
            Other interests: math, physics, photography, musical theatre, and biking.</p>
      </div>
    </>
  );
}

export default App;
