const data = [{ fake: "data" }];

function dataToUse(numberMode) {
  let checkoutsToUse = [];

  const threeDartData = (() => {
    data.forEach((co) => {
      if (co.threeDarts.length > 0) {
        checkoutsToUse.push(co);
      }
    });
  })();

  const twoDartData = (() => {
    data.forEach((co) => {
      if (co.twoDarts.length > 0) {
        checkoutsToUse.push(co);
      }
    });
  })();

  const bothDartsData = (() => {})();
}
