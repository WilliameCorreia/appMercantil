export default (status) => {
    switch (status) {
        case "C":
            return { backgroundColor: "green" }
            break;
        case "A":
            return { backgroundColor: "orange" }
            break;
        case "CAN":
            return { backgroundColor: "red" }
            break;
        case "em separação":
            return { backgroundColor: "orange" }
            break;
        case "a caminho":
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