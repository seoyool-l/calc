var scriptElement = document.createElement("script");
scriptElement.src = "https://unpkg.com/mathjs@13.0.1/lib/browser/math.js";
document.body.appendChild(scriptElement);
const check = /^(\d+|\s+|pi|-)*$/
const check1 = /^(\d+|\s+|pi|sqrt\(|e|[()+\-*/^.]|\s)*$/

function responsiveNavbar() {
  var x = document.getElementById("Topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// basic-calculator.html
function calculator() {
  var textboxinput = document.getElementById("textbox").value;
  if (!check1.test(textboxinput)) {
    document.getElementById("textbox").value = "Error"
    return
  }
  var expression = textboxinput.replace(/(\d)\s*sqrt\(/g, "$1*sqrt("); // 1√
  var expression = expression.replace(/(\d)\s*pi/g, "$1*pi"); // 1π
  var expression = expression.replace(/pi\s*(\d)/g, "pi*$1"); // π1
  var expression = expression.replace(/pi\s*\(/g, "pi*("); // π(
  var expression = expression.replace(/\)\s*pi/g, ")*pi"); // )π
  var expression = expression.replace(/pi\s*sqrt\(/g, "pi*sqrt("); // π√
  var expression = expression.replace(/pi\s*pi/g, "pi*pi"); // ππ
  var expression = expression.replace(/pi\s*pi/g, "pi*pi"); // ππ
  var expression = expression.replace(/(\d)\s*\(/g, "$1*("); // 1(
  var expression = expression.replace(/\)\s*(\d)/g, ")*$1"); // )1
  var expression = expression.replace(/\)\s*\(/g, ")*("); // )(
  try {
    var resultvar = math.evaluate(expression);
    var resultrounded = Math.round(resultvar);
    var resultnumlength = resultrounded.toString().length;
    var result = math.evaluate(expression).toFixed(15 - resultnumlength)
    if (result.includes(".")) {
      if (result.endsWith("0")) {
        result = result.slice(0, -1)
        if (result.endsWith("0")) {
          result = result.slice(0, -1)
          if (result.endsWith("0")) {
            result = result.slice(0, -1)
            if (result.endsWith("0")) {
              result = result.slice(0, -1)
              if (result.endsWith("0")) {
                result = result.slice(0, -1)
                if (result.endsWith("0")) {
                  result = result.slice(0, -1)
                  if (result.endsWith("0")) {
                    result = result.slice(0, -1)
                    if (result.endsWith("0")) {
                      result = result.slice(0, -1)
                      if (result.endsWith("0")) {
                        result = result.slice(0, -1)
                        if (result.endsWith("0")) {
                          result = result.slice(0, -1)
                          if (result.endsWith("0")) {
                            result = result.slice(0, -1)
                            if (result.endsWith("0")) {
                              result = result.slice(0, -1)
                              if (result.endsWith("0")) {
                                result = result.slice(0, -1)
                                if (result.endsWith("0")) {
                                  result = result.slice(0, -1)
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (result.endsWith(".")) {
      result = result.slice(0, -1)
    }
    document.getElementById("textbox").value = result
  } catch (err) {
    document.getElementById("textbox").value = "Error"
  }
}
function del() {
  var boxtext = document.getElementById("textbox").value;
  var boxtextlasttwo = boxtext.slice(-2)
  var boxtextlastfive = boxtext.slice(-5)
  if (boxtext.includes("Error") || boxtext.includes("Infinity")) {
    document.getElementById("textbox").value = "";
  }
  else if (boxtextlasttwo == "pi") {
    document.getElementById("textbox").value = boxtext.slice(0, -2)
  }
  else if (boxtextlastfive == "sqrt(") {
    document.getElementById("textbox").value = boxtext.slice(0, -5)
  }
  else {
    document.getElementById("textbox").value = boxtext.slice(0, -1)
  }
}

// quadratic-equation-solver.html
function quadratic() {
  var a = document.getElementById("a_value").value;
  var b = document.getElementById("b_value").value;
  var c = document.getElementById("c_value").value;
  var calcoutput = "";
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    calcoutput = "Solution: error - invalid input";
  } else {
    var a_float = parseFloat(a);
    var b_float = parseFloat(b);
    var c_float = parseFloat(c);
    try {
      if (b_float ** 2 - 4 * a_float * c_float > 0) {
        var resultvar1 =
          (-b_float + Math.sqrt(b_float ** 2 - 4 * a_float * c_float)) /
          (2 * a_float);
        var result1rounded = Math.round(resultvar1);
        var resultnumlength1 = result1rounded.toString().length;
        var resultvar2 =
          (-b_float - Math.sqrt(b_float ** 2 - 4 * a_float * c_float)) /
          (2 * a_float);
        var result2rounded = Math.round(resultvar2);
        var resultnumlength2 = result2rounded.toString().length
        var result1 = 1 * (((-b_float + Math.sqrt(b_float ** 2 - 4 * a_float * c_float)) / (2 * a_float)).toFixed(15 - resultnumlength1))
        var result2 = 1 * (((-b_float - Math.sqrt(b_float ** 2 - 4 * a_float * c_float)) / (2 * a_float)).toFixed(15 - resultnumlength2))
        calcoutput = `Solution: ${result1} and ${result2}`;
      } else if (b_float ** 2 - 4 * a_float * c_float == 0) {
        var resultvar1 =
          (-b_float + Math.sqrt(b_float ** 2 - 4 * a_float * c_float)) /
          (2 * a_float);
        var result1rounded = Math.round(resultvar1);
        var resultnumlength1 = result1rounded.toString().length;
        var result1 = 1 * (((-b_float + Math.sqrt(b_float ** 2 - 4 * a_float * c_float)) / (2 * a_float)).toFixed(15 - resultnumlength1))
        calcoutput = `Solution: ${result1}`;
      } else {
        calcoutput = "Solution: no real solutions (no x-intercepts)";
      }
    } catch (err) {
      calcoutput = "Solution: error - output has too many digits";
    }
  }
  document.getElementById("output").innerHTML = calcoutput;
  var vertex_x = -b_float / (2 * a_float);
  var vertex_y = a_float * vertex_x ** 2 + b_float * vertex_x + c_float;
  var point1_x = vertex_x - 0.5;
  var point1_y = a_float * point1_x ** 2 + b_float * point1_x + c_float;
  var point2_x = vertex_x + 0.5;
  var point2_y = a_float * point2_x ** 2 + b_float * point2_x + c_float;
  var point3_x = vertex_x - 1;
  var point3_y = a_float * point3_x ** 2 + b_float * point3_x + c_float;
  var point4_x = vertex_x + 1;
  var point4_y = a_float * point4_x ** 2 + b_float * point4_x + c_float;
  var x_coords = [point3_x, point1_x, vertex_x, point2_x, point4_x];
  var y_coords = [point3_y, point1_y, vertex_y, point2_y, point4_y];
  new Chart("chart1", {
    type: "line",
    data: {
      labels: x_coords,
      datasets: [
        {
          fill: false,
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: "rgba(0,0,255,0.7)",
          data: y_coords,
        },
      ],
    },
    options: {
      legend: { display: false },
    },
  });
}

// triangle-solver.html and right-triangle-solver.html
function triangle(rttri_var) {
  var angleABC = document.getElementById("angleABC").value;
  var angleBCA = document.getElementById("angleBCA").value;
  var angleCAB = document.getElementById("angleCAB").value;
  var AB = document.getElementById("sideAB").value;
  var BC = document.getElementById("sideBC").value;
  var CA = document.getElementById("sideCA").value;
  var amunit = document.getElementById("angle-measure-units").value;
  var situation = "";
  var knownvalues = "";
  var output = "";
  var output1 = "";
  var error = 0;
  if (!check.test(angleABC) || !check.test(angleBCA) || !check.test(angleCAB) || !check.test(AB) || !check.test(BC) || !check.test(CA)) {
    document.getElementById("output").innerHTML = "Output: error - invalid input"
    return
  }
  var angleABC = angleABC.replace(/\s+/g, "")
  var angleBCA = angleBCA.replace(/\s+/g, "")
  var angleCAB = angleCAB.replace(/\s+/g, "")
  var AB = AB.replace(/\s+/g, "")
  var BC = BC.replace(/\s+/g, "")
  var CA = CA.replace(/\s+/g, "")
  if (rttri_var == true) {
    if (amunit == "1") {
      angleABC = "pi/2";
    } else {
      angleABC = "90";
    }
  }
  try {
    if (AB == "") {
      var m_AB = "";
    } else {
      situation += "S";
      knownvalues += "AB,";
      var AB = AB.replace(/(\d)\s*pi/g, "$1*pi"); // 1π
      var AB = AB.replace(/pi\s*(\d)/g, "pi*$1"); // π1
      var AB = AB.replace(/pi\s*pi/g, "pi*pi"); // ππ
      var AB = AB.replace(/pi\s*pi/g, "pi*pi"); // ππ
      var AB = math.evaluate(AB);
      var m_AB = parseFloat(AB);
    }
    if (BC == "") {
      var m_BC = "";
    } else {
      situation += "S";
      knownvalues += "BC,";
      var BC = BC.replace(/(\d)\s*pi/g, "$1*pi"); // 1π
      var BC = BC.replace(/pi\s*(\d)/g, "pi*$1"); // π1
      var BC = BC.replace(/pi\s*pi/g, "pi*pi"); // ππ
      var BC = BC.replace(/pi\s*pi/g, "pi*pi"); // ππ
      var BC = math.evaluate(BC);
      var m_BC = parseFloat(BC);
    }
    if (CA == "") {
      var m_CA = "";
    } else {
      situation += "S";
      knownvalues += "CA,";
      var CA = CA.replace(/(\d)\s*pi/g, "$1*pi"); // 1π
      var CA = CA.replace(/pi\s*(\d)/g, "pi*$1"); // π1
      var CA = CA.replace(/pi\s*pi/g, "pi*pi"); // ππ
      var CA = CA.replace(/pi\s*pi/g, "pi*pi"); // ππ
      var CA = math.evaluate(CA);
      var m_CA = parseFloat(CA);
    }
    if (angleABC == "") {
      var m_angleABC = "";
    } else {
      situation += "A";
      knownvalues += "A_B_C,";
      var angleABC = angleABC.replace(/(\d)\s*pi/g, "$1*pi"); // 1π
      var angleABC = angleABC.replace(/pi\s*(\d)/g, "pi*$1"); // π1
      var angleABC = angleABC.replace(/pi\s*pi/g, "pi*pi"); // ππ
      var angleABC = angleABC.replace(/pi\s*pi/g, "pi*pi"); // ππ
      var angleABC = math.evaluate(angleABC);
      if (amunit == "1") {
        var angleABC = angleABC * (180 / Math.PI);
      }
      var m_angleABC = parseFloat(angleABC);
    }
    if (angleBCA == "") {
      var m_angleBCA = "";
    } else {
      situation += "A";
      knownvalues += "B_C_A,";
      var angleBCA = angleBCA.replace(/(\d)\s*pi/g, "$1*pi"); // 1π
      var angleBCA = angleBCA.replace(/pi\s*(\d)/g, "pi*$1"); // π1
      var angleBCA = angleBCA.replace(/pi\s*pi/g, "pi*pi"); // ππ
      var angleBCA = angleBCA.replace(/pi\s*pi/g, "pi*pi"); // ππ
      var angleBCA = math.evaluate(angleBCA);
      if (amunit == "1") {
        var angleBCA = angleBCA * (180 / Math.PI);
      }
      var m_angleBCA = parseFloat(angleBCA);
    }
    if (angleCAB == "") {
      var m_angleCAB = "";
    } else {
      situation += "A";
      knownvalues += "C_A_B,";
      var angleCAB = angleCAB.replace(/(\d)\s*pi/g, "$1*pi"); // 1π
      var angleCAB = angleCAB.replace(/pi\s*(\d)/g, "pi*$1"); // π1
      var angleCAB = angleCAB.replace(/pi\s*pi/g, "pi*pi"); // ππ
      var angleCAB = angleCAB.replace(/pi\s*pi/g, "pi*pi"); // ππ
      var angleCAB = math.evaluate(angleCAB);
      if (amunit == "1") {
        var angleCAB = angleCAB * (180 / Math.PI);
      }
      var m_angleCAB = parseFloat(angleCAB);
    }
  } catch (err) {
    document.getElementById("output").innerHTML =
      "Output: error - invalid input";
    return;
  }
  if (rttri_var == true) {
    if (situation.includes("SAA")) {
      if (knownvalues.includes("AB") && knownvalues.includes("B_C_A")) {
        m_angleABC = 90;
        m_angleCAB = 90 - m_angleBCA;
        m_BC = m_AB / Math.tan((m_angleBCA * Math.PI) / 180);
        m_CA = m_AB / Math.sin((m_angleBCA * Math.PI) / 180);
      } else if (knownvalues.includes("AB") && knownvalues.includes("C_A_B")) {
        m_angleABC = 90;
        m_angleBCA = 90 - m_angleCAB;
        m_BC = m_AB * Math.tan((m_angleCAB * Math.PI) / 180);
        m_CA = m_AB / Math.cos((m_angleCAB * Math.PI) / 180);
      } else if (knownvalues.includes("BC") && knownvalues.includes("B_C_A")) {
        m_angleABC = 90;
        m_angleCAB = 90 - m_angleBCA;
        m_AB = m_BC * Math.tan((m_angleBCA * Math.PI) / 180);
        m_CA = m_BC / Math.cos((m_angleBCA * Math.PI) / 180);
      } else if (knownvalues.includes("BC") && knownvalues.includes("C_A_B")) {
        m_angleABC = 90;
        m_angleBCA = 90 - m_angleCAB;
        m_AB = m_BC / Math.tan((m_angleCAB * Math.PI) / 180);
        m_CA = m_BC / Math.sin((m_angleCAB * Math.PI) / 180);
      } else if (knownvalues.includes("CA") && knownvalues.includes("B_C_A")) {
        m_angleABC = 90;
        m_angleCAB = 90 - m_angleBCA;
        m_AB = m_CA * Math.sin((m_angleBCA * Math.PI) / 180);
        m_BC = m_CA * Math.cos((m_angleBCA * Math.PI) / 180);
      } else if (knownvalues.includes("CA") && knownvalues.includes("C_A_B")) {
        m_angleABC = 90;
        m_angleBCA = 90 - m_angleCAB;
        m_AB = m_CA * Math.cos((m_angleCAB * Math.PI) / 180);
        m_BC = m_CA * Math.sin((m_angleCAB * Math.PI) / 180);
      }
    } else if (situation.includes("SS")) {
      if (knownvalues.includes("AB") && knownvalues.includes("BC")) {
        m_angleABC = 90;
        m_angleBCA = (Math.atan(m_AB / m_BC) * 180) / Math.PI;
        m_angleCAB = (Math.atan(m_BC / m_AB) * 180) / Math.PI;
        m_CA = Math.sqrt(m_AB ** 2 + m_BC ** 2);
      } else if (knownvalues.includes("AB") && knownvalues.includes("CA")) {
        m_angleABC = 90;
        m_angleBCA = (Math.asin(m_AB / m_CA) * 180) / Math.PI;
        m_angleCAB = (Math.acos(m_AB / m_CA) * 180) / Math.PI;
        m_BC = Math.sqrt(m_CA ** 2 - m_AB ** 2);
      } else if (knownvalues.includes("BC") && knownvalues.includes("CA")) {
        m_angleABC = 90;
        m_angleBCA = (Math.acos(m_BC / m_CA) * 180) / Math.PI;
        m_angleCAB = (Math.asin(m_BC / m_CA) * 180) / Math.PI;
        m_AB = Math.sqrt(m_CA ** 2 - m_BC ** 2);
      }
    } else {
      error = 1;
      output1 = "Output: error - not enough information given";
    }
  } else {
    if (
      situation.includes("SSA") ||
      situation.includes("SAA") ||
      situation.includes("SSS")
    ) {
      //SSS case
      if (
        knownvalues.includes("AB") &&
        knownvalues.includes("BC") &&
        knownvalues.includes("CA")
      ) {
        if (m_CA >= m_AB && m_CA >= m_BC) {
          m_angleABC =
            (Math.acos(
              (m_CA ** 2 - m_BC ** 2 - m_AB ** 2) / (-2 * m_BC * m_AB),
            ) *
              180) /
            Math.PI;
          m_angleBCA =
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_CA ** 2 - m_BC ** 2 - m_AB ** 2) / (-2 * m_BC * m_AB),
                ),
              ) *
                m_AB) /
              m_CA,
            ) *
              180) /
            Math.PI;
          m_angleCAB =
            180 -
            (Math.acos(
              (m_CA ** 2 - m_BC ** 2 - m_AB ** 2) / (-2 * m_BC * m_AB),
            ) *
              180) /
            Math.PI -
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_CA ** 2 - m_BC ** 2 - m_AB ** 2) / (-2 * m_BC * m_AB),
                ),
              ) *
                m_AB) /
              m_CA,
            ) *
              180) /
            Math.PI;
        } else if (m_AB >= m_BC && m_AB >= m_CA) {
          m_angleABC =
            180 -
            (Math.acos(
              (m_AB ** 2 - m_CA ** 2 - m_BC ** 2) / (-2 * m_CA * m_BC),
            ) *
              180) /
            Math.PI -
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_AB ** 2 - m_CA ** 2 - m_BC ** 2) / (-2 * m_CA * m_BC),
                ),
              ) *
                m_BC) /
              m_AB,
            ) *
              180) /
            Math.PI;
          m_angleBCA =
            (Math.acos(
              (m_AB ** 2 - m_CA ** 2 - m_BC ** 2) / (-2 * m_CA * m_BC),
            ) *
              180) /
            Math.PI;
          m_angleCAB =
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_AB ** 2 - m_CA ** 2 - m_BC ** 2) / (-2 * m_CA * m_BC),
                ),
              ) *
                m_BC) /
              m_AB,
            ) *
              180) /
            Math.PI;
        } else if (m_BC >= m_CA && m_BC >= m_AB) {
          m_angleABC =
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_BC ** 2 - m_AB ** 2 - m_CA ** 2) / (-2 * m_AB * m_CA),
                ),
              ) *
                m_CA) /
              m_BC,
            ) *
              180) /
            Math.PI;
          m_angleBCA =
            180 -
            (Math.acos(
              (m_BC ** 2 - m_AB ** 2 - m_CA ** 2) / (-2 * m_AB * m_CA),
            ) *
              180) /
            Math.PI -
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_BC ** 2 - m_AB ** 2 - m_CA ** 2) / (-2 * m_AB * m_CA),
                ),
              ) *
                m_CA) /
              m_BC,
            ) *
              180) /
            Math.PI;
          m_angleCAB =
            (Math.acos(
              (m_BC ** 2 - m_AB ** 2 - m_CA ** 2) / (-2 * m_AB * m_CA),
            ) *
              180) /
            Math.PI;
        }
      }
      //SAS case
      else if (
        knownvalues.includes("AB") &&
        knownvalues.includes("BC") &&
        knownvalues.includes("A_B_C")
      ) {
        m_CA = Math.sqrt(
          m_BC ** 2 +
          m_AB ** 2 -
          2 * m_BC * m_AB * Math.cos((m_angleABC * Math.PI) / 180),
        );
        if (m_CA >= m_AB && m_CA >= m_BC) {
          m_angleABC =
            (Math.acos(
              (m_CA ** 2 - m_BC ** 2 - m_AB ** 2) / (-2 * m_BC * m_AB),
            ) *
              180) /
            Math.PI;
          m_angleBCA =
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_CA ** 2 - m_BC ** 2 - m_AB ** 2) / (-2 * m_BC * m_AB),
                ),
              ) *
                m_AB) /
              m_CA,
            ) *
              180) /
            Math.PI;
          m_angleCAB =
            180 -
            (Math.acos(
              (m_CA ** 2 - m_BC ** 2 - m_AB ** 2) / (-2 * m_BC * m_AB),
            ) *
              180) /
            Math.PI -
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_CA ** 2 - m_BC ** 2 - m_AB ** 2) / (-2 * m_BC * m_AB),
                ),
              ) *
                m_AB) /
              m_CA,
            ) *
              180) /
            Math.PI;
        } else if (m_AB >= m_BC && m_AB >= m_CA) {
          m_angleABC =
            180 -
            (Math.acos(
              (m_AB ** 2 - m_CA ** 2 - m_BC ** 2) / (-2 * m_CA * m_BC),
            ) *
              180) /
            Math.PI -
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_AB ** 2 - m_CA ** 2 - m_BC ** 2) / (-2 * m_CA * m_BC),
                ),
              ) *
                m_BC) /
              m_AB,
            ) *
              180) /
            Math.PI;
          m_angleBCA =
            (Math.acos(
              (m_AB ** 2 - m_CA ** 2 - m_BC ** 2) / (-2 * m_CA * m_BC),
            ) *
              180) /
            Math.PI;
          m_angleCAB =
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_AB ** 2 - m_CA ** 2 - m_BC ** 2) / (-2 * m_CA * m_BC),
                ),
              ) *
                m_BC) /
              m_AB,
            ) *
              180) /
            Math.PI;
        } else if (m_BC >= m_CA && m_BC >= m_AB) {
          m_angleABC =
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_BC ** 2 - m_AB ** 2 - m_CA ** 2) / (-2 * m_AB * m_CA),
                ),
              ) *
                m_CA) /
              m_BC,
            ) *
              180) /
            Math.PI;
          m_angleBCA =
            180 -
            (Math.acos(
              (m_BC ** 2 - m_AB ** 2 - m_CA ** 2) / (-2 * m_AB * m_CA),
            ) *
              180) /
            Math.PI -
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_BC ** 2 - m_AB ** 2 - m_CA ** 2) / (-2 * m_AB * m_CA),
                ),
              ) *
                m_CA) /
              m_BC,
            ) *
              180) /
            Math.PI;
          m_angleCAB =
            (Math.acos(
              (m_BC ** 2 - m_AB ** 2 - m_CA ** 2) / (-2 * m_AB * m_CA),
            ) *
              180) /
            Math.PI;
        }
      } else if (
        knownvalues.includes("BC") &&
        knownvalues.includes("CA") &&
        knownvalues.includes("B_C_A")
      ) {
        m_AB = Math.sqrt(
          m_BC ** 2 +
          m_CA ** 2 -
          2 * m_BC * m_CA * Math.cos((m_angleBCA * Math.PI) / 180),
        );
        if (m_CA >= m_AB && m_CA >= m_BC) {
          m_angleABC =
            (Math.acos(
              (m_CA ** 2 - m_BC ** 2 - m_AB ** 2) / (-2 * m_BC * m_AB),
            ) *
              180) /
            Math.PI;
          m_angleBCA =
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_CA ** 2 - m_BC ** 2 - m_AB ** 2) / (-2 * m_BC * m_AB),
                ),
              ) *
                m_AB) /
              m_CA,
            ) *
              180) /
            Math.PI;
          m_angleCAB =
            180 -
            (Math.acos(
              (m_CA ** 2 - m_BC ** 2 - m_AB ** 2) / (-2 * m_BC * m_AB),
            ) *
              180) /
            Math.PI -
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_CA ** 2 - m_BC ** 2 - m_AB ** 2) / (-2 * m_BC * m_AB),
                ),
              ) *
                m_AB) /
              m_CA,
            ) *
              180) /
            Math.PI;
        } else if (m_AB >= m_BC && m_AB >= m_CA) {
          m_angleABC =
            180 -
            (Math.acos(
              (m_AB ** 2 - m_CA ** 2 - m_BC ** 2) / (-2 * m_CA * m_BC),
            ) *
              180) /
            Math.PI -
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_AB ** 2 - m_CA ** 2 - m_BC ** 2) / (-2 * m_CA * m_BC),
                ),
              ) *
                m_BC) /
              m_AB,
            ) *
              180) /
            Math.PI;
          m_angleBCA =
            (Math.acos(
              (m_AB ** 2 - m_CA ** 2 - m_BC ** 2) / (-2 * m_CA * m_BC),
            ) *
              180) /
            Math.PI;
          m_angleCAB =
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_AB ** 2 - m_CA ** 2 - m_BC ** 2) / (-2 * m_CA * m_BC),
                ),
              ) *
                m_BC) /
              m_AB,
            ) *
              180) /
            Math.PI;
        } else if (m_BC >= m_CA && m_BC >= m_AB) {
          m_angleABC =
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_BC ** 2 - m_AB ** 2 - m_CA ** 2) / (-2 * m_AB * m_CA),
                ),
              ) *
                m_CA) /
              m_BC,
            ) *
              180) /
            Math.PI;
          m_angleBCA =
            180 -
            (Math.acos(
              (m_BC ** 2 - m_AB ** 2 - m_CA ** 2) / (-2 * m_AB * m_CA),
            ) *
              180) /
            Math.PI -
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_BC ** 2 - m_AB ** 2 - m_CA ** 2) / (-2 * m_AB * m_CA),
                ),
              ) *
                m_CA) /
              m_BC,
            ) *
              180) /
            Math.PI;
          m_angleCAB =
            (Math.acos(
              (m_BC ** 2 - m_AB ** 2 - m_CA ** 2) / (-2 * m_AB * m_CA),
            ) *
              180) /
            Math.PI;
        }
      } else if (
        knownvalues.includes("AB") &&
        knownvalues.includes("CA") &&
        knownvalues.includes("C_A_B")
      ) {
        m_BC = Math.sqrt(
          m_CA ** 2 +
          m_AB ** 2 -
          2 * m_CA * m_AB * Math.cos((m_angleCAB * Math.PI) / 180),
        );
        if (m_CA >= m_AB && m_CA >= m_BC) {
          m_angleABC =
            (Math.acos(
              (m_CA ** 2 - m_BC ** 2 - m_AB ** 2) / (-2 * m_BC * m_AB),
            ) *
              180) /
            Math.PI;
          m_angleBCA =
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_CA ** 2 - m_BC ** 2 - m_AB ** 2) / (-2 * m_BC * m_AB),
                ),
              ) *
                m_AB) /
              m_CA,
            ) *
              180) /
            Math.PI;
          m_angleCAB =
            180 -
            (Math.acos(
              (m_CA ** 2 - m_BC ** 2 - m_AB ** 2) / (-2 * m_BC * m_AB),
            ) *
              180) /
            Math.PI -
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_CA ** 2 - m_BC ** 2 - m_AB ** 2) / (-2 * m_BC * m_AB),
                ),
              ) *
                m_AB) /
              m_CA,
            ) *
              180) /
            Math.PI;
        } else if (m_AB >= m_BC && m_AB >= m_CA) {
          m_angleABC =
            180 -
            (Math.acos(
              (m_AB ** 2 - m_CA ** 2 - m_BC ** 2) / (-2 * m_CA * m_BC),
            ) *
              180) /
            Math.PI -
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_AB ** 2 - m_CA ** 2 - m_BC ** 2) / (-2 * m_CA * m_BC),
                ),
              ) *
                m_BC) /
              m_AB,
            ) *
              180) /
            Math.PI;
          m_angleBCA =
            (Math.acos(
              (m_AB ** 2 - m_CA ** 2 - m_BC ** 2) / (-2 * m_CA * m_BC),
            ) *
              180) /
            Math.PI;
          m_angleCAB =
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_AB ** 2 - m_CA ** 2 - m_BC ** 2) / (-2 * m_CA * m_BC),
                ),
              ) *
                m_BC) /
              m_AB,
            ) *
              180) /
            Math.PI;
        } else if (m_BC >= m_CA && m_BC >= m_AB) {
          m_angleABC =
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_BC ** 2 - m_AB ** 2 - m_CA ** 2) / (-2 * m_AB * m_CA),
                ),
              ) *
                m_CA) /
              m_BC,
            ) *
              180) /
            Math.PI;
          m_angleBCA =
            180 -
            (Math.acos(
              (m_BC ** 2 - m_AB ** 2 - m_CA ** 2) / (-2 * m_AB * m_CA),
            ) *
              180) /
            Math.PI -
            (Math.asin(
              (Math.sin(
                Math.acos(
                  (m_BC ** 2 - m_AB ** 2 - m_CA ** 2) / (-2 * m_AB * m_CA),
                ),
              ) *
                m_CA) /
              m_BC,
            ) *
              180) /
            Math.PI;
          m_angleCAB =
            (Math.acos(
              (m_BC ** 2 - m_AB ** 2 - m_CA ** 2) / (-2 * m_AB * m_CA),
            ) *
              180) /
            Math.PI;
        }
      }
      //SSA case
      else if (
        knownvalues.includes("AB") &&
        knownvalues.includes("BC") &&
        knownvalues.includes("B_C_A")
      ) {
        m_angleCAB =
          (Math.asin((BC * Math.sin((m_angleBCA * Math.PI) / 180)) / m_AB) *
            180) /
          Math.PI;
        m_angleABC = 180 - m_angleBCA - m_angleCAB;
        m_CA = Math.sqrt(
          m_BC ** 2 +
          m_AB ** 2 -
          2 * m_BC * m_AB * Math.cos((m_angleABC * Math.PI) / 180),
        );
      } else if (
        knownvalues.includes("AB") &&
        knownvalues.includes("BC") &&
        knownvalues.includes("C_A_B")
      ) {
        m_angleBCA =
          (Math.asin((m_AB * Math.sin((m_angleCAB * Math.PI) / 180)) / m_BC) *
            180) /
          Math.PI;
        m_angleABC = 180 - m_angleBCA - m_angleCAB;
        m_CA = Math.sqrt(
          m_BC ** 2 +
          m_AB ** 2 -
          2 * m_BC * m_AB * Math.cos((m_angleABC * Math.PI) / 180),
        );
      } else if (
        knownvalues.includes("BC") &&
        knownvalues.includes("CA") &&
        knownvalues.includes("A_B_C")
      ) {
        m_angleCAB =
          (Math.asin((m_BC * Math.sin((m_angleABC * Math.PI) / 180)) / m_CA) *
            180) /
          Math.PI;
        m_angleBCA = 180 - m_angleABC - m_angleCAB;
        m_AB = Math.sqrt(
          m_BC ** 2 +
          m_CA ** 2 -
          2 * m_BC * m_CA * Math.cos((m_angleBCA * Math.PI) / 180),
        );
      } else if (
        knownvalues.includes("BC") &&
        knownvalues.includes("CA") &&
        knownvalues.includes("C_A_B")
      ) {
        m_angleABC =
          (Math.asin((m_CA * Math.sin((m_angleCAB * Math.PI) / 180)) / m_BC) *
            180) /
          Math.PI;
        m_angleBCA = 180 - m_angleABC - m_angleCAB;
        m_AB = Math.sqrt(
          m_BC ** 2 +
          m_CA ** 2 -
          2 * m_BC * m_CA * Math.cos((m_angleBCA * Math.PI) / 180),
        );
      } else if (
        knownvalues.includes("AB") &&
        knownvalues.includes("CA") &&
        knownvalues.includes("B_C_A")
      ) {
        m_angleABC =
          (Math.asin((m_CA * Math.sin((m_angleBCA * Math.PI) / 180)) / m_AB) *
            180) /
          Math.PI;
        m_angleCAB = 180 - m_angleABC - m_angleBCA;
        m_BC = Math.sqrt(
          m_AB ** 2 +
          m_CA ** 2 -
          2 * m_AB * m_CA * Math.cos((m_angleCAB * Math.PI) / 180),
        );
      } else if (
        knownvalues.includes("AB") &&
        knownvalues.includes("CA") &&
        knownvalues.includes("A_B_C")
      ) {
        m_angleBCA =
          (Math.asin((m_AB * Math.sin((m_angleABC * Math.PI) / 180)) / m_CA) *
            180) /
          Math.PI;
        m_angleCAB = 180 - m_angleABC - m_angleBCA;
        m_BC = Math.sqrt(
          m_AB ** 2 +
          m_CA ** 2 -
          2 * m_AB * m_CA * Math.cos((m_angleCAB * Math.PI) / 180),
        );
      }
      //ASA case
      else if (
        knownvalues.includes("A_B_C") &&
        knownvalues.includes("B_C_A") &&
        knownvalues.includes("BC")
      ) {
        m_angleCAB = 180 - m_angleABC - m_angleBCA;
        m_AB =
          (m_BC * Math.sin((m_angleBCA * Math.PI) / 180)) /
          Math.sin((m_angleCAB * Math.PI) / 180);
        m_CA =
          (m_BC * Math.sin((m_angleABC * Math.PI) / 180)) /
          Math.sin((m_angleCAB * Math.PI) / 180);
      } else if (
        knownvalues.includes("B_C_A") &&
        knownvalues.includes("C_A_B") &&
        knownvalues.includes("CA")
      ) {
        m_angleABC = 180 - m_angleCAB - m_angleBCA;
        m_AB =
          (m_CA * Math.sin((m_angleBCA * Math.PI) / 180)) /
          Math.sin((m_angleABC * Math.PI) / 180);
        m_BC =
          (m_CA * Math.sin((m_angleCAB * Math.PI) / 180)) /
          Math.sin((m_angleABC * Math.PI) / 180);
      } else if (
        knownvalues.includes("A_B_C") &&
        knownvalues.includes("C_A_B") &&
        knownvalues.includes("AB")
      ) {
        m_angleBCA = 180 - m_angleCAB - m_angleABC;
        m_CA =
          (m_AB * Math.sin((m_angleABC * Math.PI) / 180)) /
          Math.sin((m_angleBCA * Math.PI) / 180);
        m_BC =
          (m_AB * Math.sin((m_angleCAB * Math.PI) / 180)) /
          Math.sin((m_angleBCA * Math.PI) / 180);
      }
      //AAS case
      else if (
        knownvalues.includes("A_B_C") &&
        knownvalues.includes("B_C_A") &&
        knownvalues.includes("AB")
      ) {
        m_angleCAB = 180 - m_angleABC - m_angleBCA;
        m_CA =
          (m_AB * Math.sin((m_angleABC * Math.PI) / 180)) /
          Math.sin((m_angleBCA * Math.PI) / 180);
        m_BC =
          (m_AB * Math.sin((m_angleCAB * Math.PI) / 180)) /
          Math.sin((m_angleBCA * Math.PI) / 180);
      } else if (
        knownvalues.includes("A_B_C") &&
        knownvalues.includes("B_C_A") &&
        knownvalues.includes("CA")
      ) {
        m_angleCAB = 180 - m_angleABC - m_angleBCA;
        m_AB =
          (m_CA * Math.sin((m_angleBCA * Math.PI) / 180)) /
          Math.sin((m_angleABC * Math.PI) / 180);
        m_BC =
          (m_CA * Math.sin((m_angleCAB * Math.PI) / 180)) /
          Math.sin((m_angleABC * Math.PI) / 180);
      } else if (
        knownvalues.includes("B_C_A") &&
        knownvalues.includes("C_A_B") &&
        knownvalues.includes("AB")
      ) {
        m_angleABC = 180 - m_angleCAB - m_angleBCA;
        m_CA =
          (m_AB * Math.sin((m_angleABC * Math.PI) / 180)) /
          Math.sin((m_angleBCA * Math.PI) / 180);
        m_BC =
          (m_AB * Math.sin((m_angleCAB * Math.PI) / 180)) /
          Math.sin((m_angleBCA * Math.PI) / 180);
      } else if (
        knownvalues.includes("B_C_A") &&
        knownvalues.includes("C_A_B") &&
        knownvalues.includes("BC")
      ) {
        m_angleABC = 180 - m_angleCAB - m_angleBCA;
        m_AB =
          (m_BC * Math.sin((m_angleBCA * Math.PI) / 180)) /
          Math.sin((m_angleCAB * Math.PI) / 180);
        m_CA =
          (m_BC * Math.sin((m_angleABC * Math.PI) / 180)) /
          Math.sin((m_angleCAB * Math.PI) / 180);
      } else if (
        knownvalues.includes("A_B_C") &&
        knownvalues.includes("C_A_B") &&
        knownvalues.includes("BC")
      ) {
        m_angleBCA = 180 - m_angleCAB - m_angleABC;
        m_AB =
          (m_BC * Math.sin((m_angleBCA * Math.PI) / 180)) /
          Math.sin((m_angleCAB * Math.PI) / 180);
        m_CA =
          (m_BC * Math.sin((m_angleABC * Math.PI) / 180)) /
          Math.sin((m_angleCAB * Math.PI) / 180);
      } else if (
        knownvalues.includes("A_B_C") &&
        knownvalues.includes("C_A_B") &&
        knownvalues.includes("CA")
      ) {
        m_angleBCA = 180 - m_angleCAB - m_angleABC;
        m_AB =
          (m_CA * Math.sin((m_angleBCA * Math.PI) / 180)) /
          Math.sin((m_angleABC * Math.PI) / 180);
        m_BC =
          (m_CA * Math.sin((m_angleCAB * Math.PI) / 180)) /
          Math.sin((m_angleABC * Math.PI) / 180);
      }
    } else {
      error = 1;
      output1 = "Output: error - not enough information given";
    }
  }
  if (m_angleABC == "" || m_angleBCA == "" || m_angleCAB == "" || m_AB == "" || m_BC == "" || m_CA == "") {
    if (error == 0) {
      error = 1;
      output1 = "Output: error - unknown error"
    }
  }
  if (error == 0) {
    if (amunit == "1") {
      m_angleABC = m_angleABC * (Math.PI / 180);
      m_angleBCA = m_angleBCA * (Math.PI / 180);
      m_angleCAB = m_angleCAB * (Math.PI / 180);
    }
    var m_angleABCrounded = Math.round(m_angleABC);
    var m_angleABClength = m_angleABCrounded.toString().length;
    var m_angleBCArounded = Math.round(m_angleBCA);
    var m_angleBCAlength = m_angleBCArounded.toString().length;
    var m_angleCABrounded = Math.round(m_angleCAB);
    var m_angleCABlength = m_angleCABrounded.toString().length;
    var m_ABrounded = Math.round(m_AB);
    var m_ABlength = m_ABrounded.toString().length;
    var m_BCrounded = Math.round(m_BC);
    var m_BClength = m_BCrounded.toString().length;
    var m_CArounded = Math.round(m_CA);
    var m_CAlength = m_CArounded.toString().length;
    try {
      output = `Output: m∠ABC=${m_angleABC.toFixed(15 - m_angleABClength)}, m∠BCA=${m_angleBCA.toFixed(15 - m_angleBCAlength)}, m∠CAB=${m_angleCAB.toFixed(15 - m_angleCABlength)}, AB=${m_AB.toFixed(15 - m_ABlength)}, BC=${m_BC.toFixed(15 - m_BClength)}, CA=${m_CA.toFixed(15 - m_CAlength)}`;
    } catch (err) {
      output = "Output: error - output has too many digits";
    }
  } else {
    output = output1;
  }
  document.getElementById("output").innerHTML = output;
}

// length.html
const converttom = [0.001, 0.01, 1, 1000, 0.0254, 0.3048, 0.9144, 1609.344];
const convertfromm = [
  1000, 100, 1, 0.001, 39.3700787402, 3.280839895, 1.0936132983, 0.0006213712,
];
const converttoin = [0, 0, 0, 0, 1, 12, 36, 63360];
const convertfromin = [0, 0, 0, 0, 1, 1 / 12, 1 / 36, 1 / 63360];
const length_unitID = ["mm", "cm", "m", "km", "in", "ft", "yd", "mi"];
function length_convert() {
  var valuevar = document.getElementById("valueinput").value;
  var valuevar_float = parseFloat(valuevar);
  var fromunitvar = document.getElementById("fromunit").value;
  var fromunitvar_int = parseInt(fromunitvar);
  var tounitvar = document.getElementById("tounit").value;
  var tounitvar_int = parseInt(tounitvar);
  if (fromunitvar_int > 3 && tounitvar_int > 3) {
    var converttovar = converttoin[fromunitvar_int];
    var convertfromvar = convertfromin[tounitvar_int];
  } else {
    var converttovar = converttom[fromunitvar_int];
    var convertfromvar = convertfromm[tounitvar_int];
  }
  var unitlabel = length_unitID[tounitvar_int];
  var resultvar1 = valuevar_float * converttovar * convertfromvar;
  var result1rounded = Math.round(resultvar1);
  var resultnumlength1 = result1rounded.toString().length;
  try {
    document.getElementById("output").innerHTML =
      `Output: ${(valuevar_float * converttovar * convertfromvar).toFixed(15 - resultnumlength1)} ${unitlabel}`;
  }
  catch (err) {
    document.getElementById("output").innerHTML = "Output: error - output has too many digits"
  }
}

// mass.html
const converttog = [
  0.001, 1, 1000, 1000000, 453.59237, 907184.74, 1016046.9088,
];
const convertfromg = [
  1000, 1, 0.001, 0.000001, 0.0022046226, 0.000001102311359528,
  0.00000098420652761106,
];
const converttolbs = [0, 0, 0, 0, 1, 2000, 2240];
const convertfromlbs = [0, 0, 0, 0, 1, 0.0005, 1 / 2240];
const mass_unitID = ["mg", "g", "kg", "metric t", "lbs", "short t", "long t"];
function mass_convert() {
  var valuevar = document.getElementById("valueinput").value;
  var valuevar_float = parseFloat(valuevar);
  var fromunitvar = document.getElementById("fromunit").value;
  var fromunitvar_int = parseInt(fromunitvar);
  var tounitvar = document.getElementById("tounit").value;
  var tounitvar_int = parseInt(tounitvar);
  if (fromunitvar_int > 3 && tounitvar_int > 3) {
    var converttovar = converttolbs[fromunitvar_int];
    var convertfromvar = convertfromlbs[tounitvar_int];
  } else {
    var converttovar = converttog[fromunitvar_int];
    var convertfromvar = convertfromg[tounitvar_int];
  }
  var unitlabel = mass_unitID[tounitvar_int];
  var resultvar1 = valuevar_float * converttovar * convertfromvar;
  var result1rounded = Math.round(resultvar1);
  var resultnumlength1 = result1rounded.toString().length;
  try {
    document.getElementById("output").innerHTML =
      `Output: ${(valuevar_float * converttovar * convertfromvar).toFixed(15 - resultnumlength1)} ${unitlabel}`;
  }
  catch (err) {
    document.getElementById("output").innerHTML = "Output: error - output has too many digits"
  }
}

// area.html
const converttosqm = [
  0.000001, 0.0001, 1, 1000000, 10000, 0.00064516, 0.09290304, 0.83612736,
  2589988.110336, 4046.8564224,
];
const convertfromsqm = [
  1000000, 10000, 1, 0.000001, 0.0001, 1550.0031000062, 10.763910416,
  1.195990046, 0.00000038610215854245, 0.0002471054,
];
const converttosqin = [0, 0, 0, 0, 0, 1, 144, 1296, 4014489600, 6272640];
const convertfromsqin = [
  0,
  0,
  0,
  0,
  0,
  1,
  1 / 144,
  1 / 1296,
  1 / 4014489600,
  1 / 6272640,
];
const area_unitID = [
  "mm²",
  "cm²",
  "m²",
  "km²",
  "ha",
  "in²",
  "ft²",
  "yd²",
  "mi²",
  "acres",
];
function area_convert() {
  var valuevar = document.getElementById("valueinput").value;
  var valuevar_float = parseFloat(valuevar);
  var fromunitvar = document.getElementById("fromunit").value;
  var fromunitvar_int = parseInt(fromunitvar);
  var tounitvar = document.getElementById("tounit").value;
  var tounitvar_int = parseInt(tounitvar);
  if (fromunitvar_int > 4 && tounitvar_int > 4) {
    var converttovar = converttosqin[fromunitvar_int];
    var convertfromvar = convertfromsqin[tounitvar_int];
  } else {
    var converttovar = converttosqm[fromunitvar_int];
    var convertfromvar = convertfromsqm[tounitvar_int];
  }
  var unitlabel = area_unitID[tounitvar_int];
  var resultvar1 = valuevar_float * converttovar * convertfromvar;
  var result1rounded = Math.round(resultvar1);
  var resultnumlength1 = result1rounded.toString().length;
  try {
    document.getElementById("output").innerHTML =
      `Output: ${(valuevar_float * converttovar * convertfromvar).toFixed(15 - resultnumlength1)} ${unitlabel}`;
  }
  catch (err) {
    document.getElementById("output").innerHTML = "Output: error - output has too many digits"
  }
}

// volume.html
const converttocubicm = [
  0.000001, 0.001, 1, 1000000000, 0.0000163871, 0.0283168466, 0.0000295735,
  0.0002365882, 0.0004731765, 0.0009463529, 0.0037854118,
];
const convertfromcubicm = [
  1000000, 1000, 1, 0.000000001, 61023.744094732, 35.3146667215,
  33814.022701843, 4226.7528377304, 2113.3764188652, 1056.6882094326,
  264.1720523581,
];
const converttocubicin = [0, 0, 0, 0, 1, 1728, 0, 0, 0, 0, 0];
const convertfromcubicin = [0, 0, 0, 0, 1, 1 / 1728, 0, 0, 0, 0, 0];
const converttoUSfloz = [0, 0, 0, 0, 0, 0, 1, 8, 16, 32, 128];
const convertfromUSfloz = [
  0, 0, 0, 0, 0, 0, 1, 0.125, 0.0625, 0.03125, 0.0078125,
];
const volume_unitID = [
  "mL (cm³)",
  "L (dm³)",
  "m³",
  "km³",
  "in³",
  "ft³",
  "US fl oz",
  "US c",
  "US pt",
  "US qt",
  "US gal",
];
function volume_convert() {
  var valuevar = document.getElementById("valueinput").value;
  var valuevar_float = parseFloat(valuevar);
  var fromunitvar = document.getElementById("fromunit").value;
  var fromunitvar_int = parseInt(fromunitvar);
  var tounitvar = document.getElementById("tounit").value;
  var tounitvar_int = parseInt(tounitvar);
  if (
    fromunitvar_int > 3 &&
    fromunitvar_int < 6 &&
    tounitvar_int > 3 &&
    tounitvar_int < 6
  ) {
    var converttovar = converttocubicin[fromunitvar_int];
    var convertfromvar = convertfromcubicin[tounitvar_int];
  } else if (fromunitvar_int > 5 && tounitvar_int > 5) {
    var converttovar = converttoUSfloz[fromunitvar_int];
    var convertfromvar = convertfromUSfloz[tounitvar_int];
  } else {
    var converttovar = converttocubicm[fromunitvar_int];
    var convertfromvar = convertfromcubicm[tounitvar_int];
  }
  var unitlabel = volume_unitID[tounitvar_int];
  var resultvar1 = valuevar_float * converttovar * convertfromvar;
  var result1rounded = Math.round(resultvar1);
  var resultnumlength1 = result1rounded.toString().length;
  try {
    document.getElementById("output").innerHTML =
      `Output: ${(valuevar_float * converttovar * convertfromvar).toFixed(15 - resultnumlength1)} ${unitlabel}`;
  }
  catch (err) {
    document.getElementById("output").innerHTML = "Output: error - output has too many digits"
  }
}

// temperature.html
const temperature_unitID = ["°C", "°F", "K"];
function temperature_convert() {
  var valuevar = document.getElementById("valueinput").value;
  var valuevar_float = parseFloat(valuevar);
  var fromunitvar = document.getElementById("fromunit").value;
  var fromunitvar_int = parseInt(fromunitvar);
  var tounitvar = document.getElementById("tounit").value;
  var tounitvar_int = parseInt(tounitvar);
  if (fromunitvar_int == 1 && tounitvar_int == 0) {
    var resultvar = (valuevar_float - 32) * (5 / 9);
  } else if (fromunitvar_int == 2 && tounitvar_int == 0) {
    var resultvar = valuevar_float - 273.15;
  } else if (fromunitvar_int == 0 && tounitvar_int == 1) {
    var resultvar = valuevar_float * (9 / 5) + 32;
  } else if (fromunitvar_int == 0 && tounitvar_int == 2) {
    var resultvar = valuevar_float + 273.15;
  } else if (fromunitvar_int == 1 && tounitvar_int == 2) {
    var resultvar = (valuevar_float - 32) * (5 / 9) + 273.15;
  } else if (fromunitvar_int == 2 && tounitvar_int == 1) {
    var resultvar = (valuevar_float - 273.15) * (9 / 5) + 32;
  } else {
    var resultvar = valuevar_float;
  }
  var unitlabel = temperature_unitID[tounitvar_int];
  var resultrounded = Math.round(resultvar);
  var resultnumlength = resultrounded.toString().length;
  try {
    document.getElementById("output").innerHTML =
      `Output: ${resultvar.toFixed(15 - resultnumlength)}${unitlabel}`;
  }
  catch (err) {
    document.getElementById("output").innerHTML = "Output: error - output has too many digits"
  }
}

// angle-measure.html
const converttodeg = [1, 180 / Math.PI];
const convertfromdeg = [1, Math.PI / 180];
const am_unitID = ["degrees", "rad"];
function am_convert() {
  var valueinputvar = document.getElementById("valueinput").value;
  if (!check.test(valueinputvar)) {
    document.getElementById("output").innerHTML = "Output: error - invalid input"
    return
  }
  var valuevar = valueinputvar.replace(/(\d)\s*pi/g, "$1*pi"); // 1π
  var valuevar = valuevar.replace(/pi\s*(\d)/g, "pi*$1"); // π1
  var valuevar = valuevar.replace(/pi\s*pi/g, "pi*pi"); // ππ
  var valuevar = valuevar.replace(/pi\s*pi/g, "pi*pi"); // ππ
  var valuevar_float = math.evaluate(valuevar);
  var fromunitvar = document.getElementById("fromunit").value;
  var fromunitvar_int = parseInt(fromunitvar);
  var tounitvar = document.getElementById("tounit").value;
  var tounitvar_int = parseInt(tounitvar);
  var converttovar = converttodeg[fromunitvar_int];
  var convertfromvar = convertfromdeg[tounitvar_int];
  var unitlabel = am_unitID[tounitvar_int];
  var resultvar1 = valuevar_float * converttovar * convertfromvar;
  var result1rounded = Math.round(resultvar1);
  var resultnumlength1 = result1rounded.toString().length;
  try {
    document.getElementById("output").innerHTML =
      `Output: ${(valuevar_float * converttovar * convertfromvar).toFixed(15 - resultnumlength1)} ${unitlabel}`;
  }
  catch (err) {
    document.getElementById("output").innerHTML = "Output: error - output has too many digits"
  }
}

//area-calculator.html
function area() {
  var valueinput1 = document.getElementById("valueinput1").value
  var valueinput2 = document.getElementById("valueinput2").value
  var valueinput3 = document.getElementById("valueinput3").value
  var shape = document.getElementById("shapeselect").value
  var result = 0
  if (shape == "0") {
    result = valueinput1 ** 2
  }
  else if (shape == "1" || shape == "4") {
    result = valueinput1 * valueinput2
  }
  else if (shape == "2" || shape == "5") {
    result = (valueinput1 * valueinput2) / 2
  }
  else if (shape == "3") {
    result = Math.PI * (valueinput1 ** 2)
  }
  else if (shape == "6") {
    result = ((valueinput1 + valueinput2) / 2) * valueinput3
  }
  else if (shape == "7") {
    result = (valueinput1 * (valueinput2 ** 2)) / (4 * Math.tan(Math.PI / valueinput1))
  }
  var resultrounded = Math.round(result)
  var resultlength = resultrounded.toString().length
  document.getElementById
  try {
    document.getElementById("output").innerHTML = `Output: ${result.toFixed(15 - resultlength)}`
  }
  catch (err) {
    document.getElementById("output").innerHTML = "Output: error - output has too many digits"
  }
}
