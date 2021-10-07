import React from "react";

function Feedback() {
  return (
    <>
      <div class="textpage4">
        <p
          style={{
            position: "relative",
            left: "30px",
            fontSize: "21px",
            margin: 0,
          }}
        >
          ข้อเสนอแนะ
        </p>
      </div>
      <section class="page8">
        <div class="feedbackpage8">
          <form>
            <img
              id="imgpage8"
              style={{ marginRight: "100px" }}
              src="./pic/feedback/feedback.jpg"
              alt=""
            />
            <div class="mb-3">
              <input
                className=" form-control-lg"
                type="text"
                style={{ width: "500px", height: "300px" }}
                aria-label=".form-control-lg example"
              />
            </div>
          </form>
        </div>
      </section>
      <div class="submitpage8">
        <form action="/thxfeedback">
          <input
            style={{
              width: "60px",
              height: "30px",
              fontSize: "16px",
              backgroundColor: "#e8bcbc",
              border: "none",
            }}
            type="submit"
            value="ส่ง"
          />
        </form>
      </div>
    </>
  );
}

export default Feedback;
