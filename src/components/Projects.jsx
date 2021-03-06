import React from "react";
import "./Projects.css";
import { GitHub, Bolt } from "@mui/icons-material";

function Projects() {
  return (
    <div className="projcontainer">
      <h2 className="prtitle"> Featured Projects</h2>
      <div className="projectcards">
        <div className="cardcontainer">
          <div className="imgcontainer">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlf69Vl9pTCdnp6aqmAFwFohG0WEMzJDX4SQ&usqp=CAU"
              }
              alt=""
            />
          </div>
          <div className="cardinfo">
            <div className="cardtle">
              <h3>ShoeMe</h3>
            </div>
            <div className="cardbdy">
              <p className="cardtxt">
                Shoeme is an e-commerce webstite for selling and buying
                shoes.Built using the MERN stack.It's also integrated with the
                m-pesa A.P.I,making it easy for a user to mske payments online
                via m-pesa payments
              </p>
            </div>
            <div className="prjbtn">
              <button className="live">
                <a href="https://www.shoeme.tk/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <Bolt />{" "}
                </a>
              </button>
              <button className="git">
                <a
                  href="https://github.com/Darkknight123/ShoeMe"
                  target="_blank" rel="noopener noreferrer"
                >
                  {" "}
                  <GitHub />{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="cardcontainer">
          <div className="imgcontainer">
            <img
              src={
                "data:image/jpeg;base64,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"
              }
              alt=""
            />
          </div>
          <div className="cardinfo">
            <div className="cardtle">
              <h3>Help a society initiative</h3>
            </div>
            <div className="cardbdy">
              <p className="cardtxt">
                A single landing page for a Community Based Organisation
                specializing in donations of foods and other basic neccesecities
              </p>
            </div>
            <div className="prjbtn">
              <button className="live">
                <a
                  href="https://www.helpasocietyinitiative.tk/"
                  target="_blank" rel="noopener noreferrer"
                >
                  {" "}
                  <Bolt />{" "}
                </a>
              </button>
              <button className="git">
                <a
                  href="https://github.com/Darkknight123/hasi-web"
                  target="_blank" rel="noopener noreferrer"
                >
                  {" "}
                  <GitHub />{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="cardcontainer">
          <div className="imgcontainer">
            <img
              src={"https://scr.template-help.com/40700/40763-original.jpg"}
              alt=""
            />
          </div>
          <div className="cardinfo">
            <div className="cardtle">
              <h3>AdmireKavvy</h3>
            </div>
            <div className="cardbdy">
              <p className="cardtxt">
                An e-shop for a small-scale business specialised in retail of
                jewellery both male and female. Built with the MERN stack
              </p>
            </div>
            <div className="prjbtn">
              <button className="live">
                <a href="https://admirekavvy.netlify.app/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <Bolt />{" "}
                </a>
              </button>
              <button className="git">
                <a
                  href="https://github.com/Darkknight123/AdmireKavvy"
                  target="_blank" rel="noopener noreferrer"
                >
                  {" "}
                  <GitHub />{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="cardcontainer">
          <div className="imgcontainer">
            <img
              src={
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVEhgWEhQYFBgZEhYaGhUYEhoYGB0ZGBUZGhkcGhgcIS4lHB4rHxYYJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJSw0NDE0NTY2NDY6NDQxND00MTQ0NDQ0NDE0NDQ1NDE0NDQ0NDQ2NDQ9NDQxNDQ0NDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQCBQYBBwj/xABEEAACAQIDBAUICQMCBQUAAAABAgADEQQSIQUTMVEiMkFxkQYzUmFykrHBBxQVQlNigYLCc6Hw0eJjg5PS8RYXIzRD/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAEDAgQF/8QAIhEBAQACAgEEAwEAAAAAAAAAAAECEQMhMQQSIlETYYFB/9oADAMBAAIRAxEAPwD6rPIktGlfU8JURXi8u7heUbheUbNKN4vLu4XlG4XlGzSleLy7uF5RuF5Rs0pXi8u7heUbheUbNKV4vLu4XlG4XlGzSleLy7uF5RuF5Rs0pXi8u7heUbheUbNKV4vLu4XlG4XlGzSleLy7uF5RuF5Rs0pXi8u7heUbheUbNKV57eXdwvKPq68o2aUrxM69LKdOBkYMDKJ5PZQiIgIiICIiB4Zcw/UH+dsosZew3UH+dslIwxGMppbO4W4Yi5tcKLse4DjITtTD3tvVve1g19b5baesEfoZJi8DSq23ihgt7A8NQVOncTMBsygLWpJoQR0RoQzsLdxdz+4x0qSli6bAMrAhmKg9hINiO+4tLN5AMOgAAUABiwHZcm5Pibye0l0nb2IiFIiICIiAiIgIiICIiAiIgIiICIiBVxx6P6j5ymplvaPUHtD4GUEMsc1YE9mKzISqREQEREBERAiabDC9Qd3zmuebDCdRe75yUiaJp9uJiiE+rG1i2YBlUk26HSZGGUHiALns5GhVO1gTlFBhuzbTKQ5qHTibgJY+vXhpEm1dPE5gUtplKpZ1FQ0au7C5AgqMENPWxPROdbka9t9JM9TaTVDkWkiZl0Y5mVcouDlOrXzX5Ara+se1NuhicqjbXyXYUC2Q9AaXe1SxzEnQEURw4M3aJe2bVxwqAYhEZCFGZLKVOQksRmNwWW1hwLC1xcxcVb2IiQIiICIiAiIgeRIMYxCEjjp8RNdTxjjtvMc+bHCyV3jhcpuNxE1T49uzT/O6bGixKgmXDlxztmKZYXHylieT2auSIiBT2l1B7Q+BlGnLu0/Nj2h8DKNOWJVhZkJgszEoREQEREBERAhebDCdRe75zXPNjhOovd85KRS2ps+pVNMpXekEe7BbjOumhIII4d2p04W1a+T2JuC2PrN0CrcVuc9wRlYW6NhzuLgi5B3uMZwBkzX16qq3LjmIkDPUubGpzHQS2gJtx1PZEti6aT/0zXfWtiXP/wAjgKKjsBS3tN0UNdbuBTtnIJ6Z10BmS+TWIAJXGVA1uIJUM27CFm1IJOUakEjjxm4WrVHHeH/lpz5BrzzeVb//AK8bebp248eMvuqaaldgYpqCLUxJSsu+u6Go9g9VXUBmYMQqoF1Ot5cxmx671A64qog3qMUBOXKiBStr21N25G+oNhbaLRqdtUn9i843FT8U+4smzTmKvkzisqn649RkzsgZnQBirhSGDNbWpxYPooAsL36PZuHqIgWrU3jC3TsQScozXuTfpZiLWABAtpraQEAAm552tf8AQTOLbVexESBERARE8gQ4qmWQgWubceHETWV8MyC97jtIFiO8a6TcH5zzLx9f+kw5eHHPu+XeOdxaAuP058R4zdYXqDuk0+SeUWP26mJq4hWFKjSdslPOjKyK4RFKLdmZ7qbadawIMvp/Tey3vyuedznh9bvrb1Rrf1TQ+R+31xuFWocq1B0atNWuUcEixB1F7XAPYZvptZZdVmyiIgUtp+bHtD4GUacvbT82PaHwMo05UqdZmJgszEoREQEREBERAgebHCdRe75zXPNjhOovd85KRNExdgOM8Di176SG5vSSJHvV9IeIhaingQf1hUkREDyJi7AC5ngqAi99OcJub0kiR71fSHiI3y+kPEQqSJgrg8CD3GZwERMb/wDmB4b38JkTIqtZVtmIW5sLmSwIq1RVF2IAHEmcrX2jUqPXFGkQEDZazOmVmyXRkQ3J6YA1AGl9eEseVGLIsv3cwBPZmLAKvfc/CaK09GHBMpuvFyetvFnqTcR/RfiaSK9GrTeljHJqVC971RmJDprlsM1iFtY6+ufRzPn2z6wNYMgVnpPwI1Usgvr2XRv7zuMJilqLcEXFri4NjynPNhrLcacHPOSavVWhPYiYvSpbT82PaHwMo05e2n5se0PgZRpypU6zMTBZmJQiIgIiICIiBA82OE6i93zmuebHCdRe75yUjzFUA6lW4EEHuIsZhSwuWnlQlbKADxIA4ceP6zPFVsqlrE2BNgLnTkOcwpYm6ZiMugPS0tfnykZ/H3/tGMLVsb12PCxCILa35a8oOEqfjOOiBoq8RbXUcTY+Jno2gmvTp6f8UcNNeHCxHiJ6u0KXbUpgdtqqnW/+eMNViipCgMxYgasQAT67CSyqMdS7KiHQmwYE2AudB6pPTcEAg3BFwfVAhxmHFSmyNwZSDrbQix1EjwuCFOlu0JUBbKeJHr/vJMZiMiM9i2VSbAXJsL2A7TI8HjQ9IVCCoK5rMLED1+EMvh+T96eDC1L+eYi1rFV45bXva4114zxMHUF71mNxbqrpre/fA2gh0D076abzWxF+Fr8NZ6u0KZ4Oh0v1+y4HLmYavDhKlvPsNb3yp4aiXhKY2jRtrUQakdccRxFz26iXYCIiBWxGGVwMwOh4Xt2jl3CRVMOy9Qm3o3+Euf6wDeSyLLY4LaOBapXNEZgmdK1U3IyojZwL+kzqBbkGPZIbzrPKjaAw+Eq1iuYIlyBa5v0e3T70+W/+5CHrUGYevJPbw5Wx871PBbl8Z919B8m8BTNGqp1L12diDZtVVVsfZUD9JsdkYNEJyj7tiSbk63F/Cc75HbfTEqz06Ypq2ZcpIzkqBrYE2Fz26zs8PTyqB28T3zzclvusl6evhwkwmWU78LETwCezhqpbT82PaHwMo05e2n5se0PgZRpypU6zMTBZmJQiIgIiICIiBA82OE6i93zmvebDCdRe75yUiRgO2eZFta1xIccjlCEIVrGxIuAewkdsjw6VFpWazvl1t0Qx+Ujjfz1r+rIoIOCqP2iebhPRXjfqiUg9bNbcaWbpfWOQ00t2/wBoVsQLndKCBoN8SDr6x8oaL25T0V90SQCRYdnKguAra3ANxx017pNAiqsoUliABxJNgP1PCU/tPCWtv6JB4g1UN+/Wcj9LWysViMIgwytUVKuapSTVmGUhTl+9Y9nrv2T5JR2BiAOns/FMb8RRqLpppbIfXrNsOOZTe3Nur4fof7Qwf4tDhbzicLd/KBtDB/i0P+pT/wBZ+e12FV0vszFHmRTqDwG6mOI2BXKjd7PxSNfUtRdxbkAKY7/8vOvwY/Z7n6RpLTKgoFKnUFbEH1gjjJ5wv0T7LxOHwbLiVZA1YtTpvoyrlUE5fu3IJt+vbO6mGU1bIsexESKREQKuPwVOvTalVQOjrZlPAiaEeQmzBfLhUW6OhILA2dSrduhsTrxE6eIls8Uc7szyMwGHqK9CkabIbgirUsTYjpAtZtCeN50UT2LbfIREQKW0+oPaHwMpU555VeYH9RfgZyqGVNOyWZCciDMgY2adZE5O8XjZp1kTlqNZ0N1Yg/2/Uds6ai+ZQ3MA+MJpnERKqFpsMJ1F7vnNe0nwuICjK3DsMlSNhEh+sp6Q8Z59aT0l8ZHSeJB9ap+mviI+tU/TX3hAniQfWqfpr7wj61T9NfeECeJB9ap+mvvCPrVP0194QJ4lf63T9NfeEwfaFFetUQX5sBAtxKX2rh/xk98R9q4f8ZPfEC7ErUcbSe+R1a3GzA8ZJv09IeMCWJFv09IeMb9PSHjAliRb9PSHjG/T0h4wJYkW/T0h4xv09IeMCWJHvl9IeMb1eYgazyios9EBFLHOpsO4znV2XX/Db+0693udOEzQQOSGy6/4bf2/1htnVgLmm3hf+wnZCewOCiWdoKBVcDTpt8ZWgJ0uB82nsCc1OlwPm09gSxKsRESiIzBhJCJ4RAgZJgUlgrPMsCtkjJLOWMsCtkjJLOWMsCtknhSWss8KyCqac1e2U6n7vlN4Vmq2yvU/d/GEjnMcaiqN2mY5tdAbLlJ0BZe0KOOl762lQ4rFX/8ArD7mu9H3utfT7s2WNwrOFC1Hp2cMShsWABupPLX+wlP7KqcfrNVujaxfKL2bW68NSDpy/SWaV0fkZvGRzUQI3Q6I9k37T238J0bU9D2aceU0PkVgmTelqjVCxpklidCEytlF9ASt7DhedJiaamm4cZlKMGUnQqQQRrzElVCtPQa30GvP1wVF7EgE8BfXwmvFDCK2YUkBsRfPT+8LN9/ja+sLhMH2UUHE3zJfiGNjn5geEdDYimIyTXJhsIhBFBVI1BzobWPHr85lhMPhBUVkpKrg9Fsyk6gjTpns0/WOhf3c93cs5J466GQQCnM0Sac4x9dRwPZrN+i6TLj5ceTenWWFx8vESZgSNK6FiodSw4qGGYd44iTzVyT2eT2BxW0vPP8A1G+MrSxtPzz+23xleAnS4HzaewJzU6XA+bT2BLEqxERKMZ5aZzyBhaLTOLQMLRaZ2i0DC0WmdotAwtPCJJaeEQIiJqttDqfu/jNuRNVtsdT938ZEjS1qZYaEDXmf4kSI4ZtdR7z/APdLUSOm58kqRXeXIPU7WPpekTOjImi8mB5z9n8pvyIEVwYDC15DhMClNWVBYM7Odb9JjdjrPKeARaW6AOXKVtmINje/SFjfU6y9CfMLTICVq+AR6W7cZlsBYsb2W1ulxvoNeMtqNIHlpi6XktokGvOzU5MR7Ukx9F3oVEpvu3ak6o9tVZlIVreokH9JJi82RsvG2mtphgHJpgsCLX48geMzwmON1jNOruzdr4xi/o3xSJnp11aqAM46SkuX6RWqSNALG510J5T6X5DbcGJwoDur1qJNOtZr9JSVDg9qsFDA+s8pToUK7Yusxrq2HLkrSFMXuUAKmoeKXzNYDieNtDj5JbJwODrVFoKQ7m2dmzdG5IproAoF7DnbUm09N3lLL3Z2zyzwkll89f120SJ27JIBMnTi9peef+o3xlaWdpeef+o3xlaAnS4HzaewJzU6XA+bT2BLEqxERKEREBERAREQEREBPDPZ4YGJmo219z938ZtzNTtv7n7v4yJGnr5spyWvY2vwvbS9uy8wDOEBILNpcLblrbN2XklVwoJPAC/hPEqgqGHA2t2ceHGQ693lvfJNyd5dSvU62W/3uR/y86J+H6dnH9JofJZr7z9nL83KbnGYlaVN6lQ2VEZ2bkqKWY+AMOmOf8ze5/tjN+Zvc/2z5y/0w4a5y4WsRfQ5kFxztfSZU/pdot1cFXb2WU/Ca/jz+mev2+mA3E9nzGp9L9FSQ2DrKRxBdAR3gmWNl/SvhatZKbUKtIMwXOxQqCxsuYA3tcgXkvFl9O9x9HiImavDOTxm1mG8pZcouyg36Q1sTppYjX/LTq2mk2nsU1HzKwW4FwRe5Gl/C004rjMvkw9ROS46wavqYe6mxNtRpqTr8JqKVXpMF0KMov6yqv8ABhOqqbFY0wmZRa2uU9nqmuw/ko6vUY1lOdwwGQiwFNUtx16t/wBZ6ceXCb3Xgy9PyX/PDosHUzqrEcVB8RLkqYDDGnTVSb2Frjv5S3PHdb6fUw37Zvy4DEtU+tVgSMu8Ygdo6XzmUmxyWrVDzqN4XkMm9utSdQnS4HzaewJzU6XA+bT2BLEqxERKEREBERAREQEREBPDPZ4YGJmp239z938ZtjNTtv7n7v4yJGqYDtmJpqRYgEciLieYinmUqCVuCLjiLjiPXMEoEIFzXIA6TDMTYcT65Dvfj+ui8k6SrvMqhb5OAA9LlN7iaCOjI6hkdGVlPAqwswPqIJnJbCxhoM2ezK1uqliLXt2m/EzffbtH83uw6cfU+iPZ5JIq4hRfRRUpkD1AtTJ8SYX6JMCOGIxQ7qlMfCnOw+3aP5vdj7do/m92d/ky+01HHt9EeBJua+KJ5mpTJ5fhyxsz6LsBRqrUz1qpRgwV3TJdTcEhUBNjra86j7do/m92Pt2j+b3Y/Jl9mo2sTVfbtH83ux9u0fze7OFbWJqvt2j+b3Y+3aP5vdgbWJqvt2j+b3Y+3aP5vdgbWJqvt2j+b3Zi23qNtAxPLLaBodpeef8AqN8ZWmdeoWdmPFmJ8TMICdLgfNp7AnNTpcD5tPYEsSrEREoREQEREBERAREQE8MRAxM1O2/ufu/jESJGriIkdEREBERAREQEREBERAREQEREBERATpcD5tPYE9iWJU8REo//2Q=="
              }
              alt=""
            />
          </div>
          <div className="cardinfo">
            <div className="cardtle">
              <h3>Employee Verification System</h3>
            </div>
            <div className="cardbdy">
              <p className="cardtxt">
                "My final year project of a system that uses facial recognition
                technology to allow employees access to restricted areas.Built
                with flask as the backend and react as the frontend,using
                computr vision for the facial algorithm"
              </p>
            </div>
            <div className="prjbtn">
              <button className="live">
                <a
                  href="https://github.com/Darkknight123/EmployeeVerificationSystem"
                  target="_blank" rel="noopener noreferrer"
                >
                  {" "}
                  <Bolt />{" "}
                </a>
              </button>
              <button className="git">
                <a
                  href="https://github.com/Darkknight123/EmployeeVerificationSystem"
                  target="_blank" rel="noopener noreferrer"
                >
                  {" "}
                  <GitHub />{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="apps">
        <div className="cardcontainer">
          <div className="imgcontainer">
            <img
              src={
                "https://appinventiv.com/wp-content/uploads/sites/1/2020/01/android-vs-ios-design-differences.png"
              }
              alt=""
            />
          </div>
          <div className="cardinfo">
            <div className="cardtle">
              <h3>Image App</h3>
            </div>
            <div className="cardbdy">
              <p className="cardtxt">
                One of the first app I ever built while starting on on android
                development. It's an app that enables the user to upload images
                in their gallery to their local machine acting as the server.
                It's developed in java and retrofit{" "}
              </p>
            </div>
            <div className="prjbtn">
              <button className="live">
                <a
                  href="https://github.com/Darkknight123/ImageApp"
                  target="_blank" rel="noopener noreferrer"
                >
                  {" "}
                  <Bolt />{" "}
                </a>
              </button>
              <button className="git">
                <a
                  href="https://github.com/Darkknight123/ImageApp"
                  target="_blank" rel="noopener noreferrer"
                >
                  {" "}
                  <GitHub />{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="cardcontainer">
          <div className="imgcontainer">
            <img
              src={
                "https://appinventiv.com/wp-content/uploads/sites/1/2019/02/How-Important-is-UI-UX-Design-in-an-App-Development-Process.png"
              }
              alt=""
            />
          </div>
          <div className="cardinfo">
            <div className="cardtle">
              <h3>Bluechat</h3>
            </div>
            <div className="cardbdy">
              <p className="cardtxt">
                An app that enables to mobile users connected via bluetooth to
                communicate through sending text messages to each other.It is
                developed in java and doesn't use any hosting services,but
                sessions
              </p>
            </div>
            <div className="prjbtn">
              <button className="live">
                <a
                  href="https://github.com/Darkknight123/BlueChat"
                  target="_blank" rel="noopener noreferrer"
                >
                  {" "}
                  <Bolt />{" "}
                </a>
              </button>
              <button className="git">
                <a
                  href="https://github.com/Darkknight123/BlueChat"
                  target="_blank" rel="noopener noreferrer"
                >
                  {" "}
                  <GitHub />{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="cardcontainer">
          <div className="imgcontainer">
            <img
              src="https://www.valuecoders.com/blog/wp-content/uploads/2019/11/THE-STATE-OF-UI-UX-DESIGN-IN-MOBILE-APP-DEVELOPMENT-TRENDS-FOR-1.png"
              alt=""
            />
          </div>
          <div className="cardinfo">
            <div className="cardtle">
              <h3>Dashfood</h3>
            </div>
            <div className="cardbdy">
              <p className="cardtxt">
                "It is a grocery delvery app that eases the way users buy their
                grocery products.Built with java and firebase as a side project"
              </p>
            </div>
            <div className="prjbtn">
              <button className="live">
                <a
                  href="https://github.com/Darkknight123/Grocery-delivery-app"
                  target="_blank" rel="noopener noreferrer"
                >
                  {" "}
                  <Bolt />{" "}
                </a>
              </button>
              <button className="git">
                <a
                  href="https://github.com/Darkknight123/Grocery-delivery-app"
                  target="_blank" rel="noopener noreferrer"
                >
                  {" "}
                  <GitHub />{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="cardcontainer">
          <div className="imgcontainer">
            <img
              src={
                "https://i.pinimg.com/originals/e8/26/55/e82655f6c49ebb3475ff03c3af34c05a.png"
              }
              alt=""
            />
          </div>
          <div className="cardinfo">
            <div className="cardtle">
              <h3>Memoir</h3>
            </div>
            <div className="cardbdy">
              <p className="cardtxt">
                "An app that am currently working on inspired by a very
                forgetfull friend of mine. The app will be able to help the
                propective user to manage their day to day tasks which wil do
                away with the need of sticky notes. One will also be able to see
                the number of tasks they have done and how many they have missed
                "
              </p>
            </div>
            <div className="prjbtn">
              <button className="live">
                <a
                  href="https://github.com/tuk-scit/kerry-monitoring-app"
                  target="_blank" rel="noopener noreferrer"
                >
                  {" "}
                  <Bolt />{" "}
                </a>
              </button>
              <button className="git">
                <a
                  href="https://github.com/tuk-scit/kerry-monitoring-app"
                  target="_blank" rel="noopener noreferrer"
                >
                  {" "}
                  <GitHub />{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
