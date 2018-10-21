function comp_value() {
    comp = (Math.floor(Math.random() * 5) + 1)
    return (comp);
}
function match(value) {
    if (comp_value() == value) {
        alert('Win')
    }
    else {
        alert('Lose')
    }

}