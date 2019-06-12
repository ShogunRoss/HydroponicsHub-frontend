const Chartist = require("chartist");

// ##############################
// variables used to create animation on charts
// #############################
const delays = 80,
  durations = 500;

// ##############################
// TDS
// #############################
const tdsConfigChart = {
  data: {
    labels: [],
    series: []
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 500,
    high: 1200,
    chartPadding: {
      top: 16,
      right: 0,
      bottom: 56,
      left: 32
    },
    height: "30vh"
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

// ##############################
// Temperature Subscriptions
// #############################

const tempConfigChart = {
  data: {
    labels: [],
    series: []
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 15,
    high: 35,
    chartPadding: {
      top: 16,
      right: 0,
      bottom: 56,
      left: 32
    },
    height: "30vh"
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

// ##############################
// pH Subscriptions
// #############################

const phConfigChart = {
  data: {
    labels: [],
    series: [[]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 4,
    high: 10,
    // fullWidth: true,
    chartPadding: {
      top: 16,
      right: 0,
      bottom: 56,
      left: 32
    },
    // axisY: {
    //   type: Chartist.FixedScaleAxis,
    //   ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    //   low: 0,
    //   high: 14
    // },
    height: "30vh"
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

module.exports = {
  tdsConfigChart,
  tempConfigChart,
  phConfigChart
};
