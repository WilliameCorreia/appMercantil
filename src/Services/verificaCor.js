export default (status) => {
    switch (status) {
        case "C":
            return { backgroundColor: "grey" }
            break;
        case "A":
            return { backgroundColor: "green" }
            break;
        case "CAN":
            return { backgroundColor: "red" }
            break;
        case "S":
            return { backgroundColor: "orange" }
            break;
        case "E":
            return { backgroundColor: "blue" }
            break;
        case "entregue":
            return { backgroundColor: "green" }
            break;

        default:
            return {}
            break;
    }
}