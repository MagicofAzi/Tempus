var scoreString = window.sessionStorage.getItem("fields");
var fields = JSON.parse(scoreString);

function showResult() {
    window.alert(JSON.stringify(fields));
}
