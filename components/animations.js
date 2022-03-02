export const fadeIn = {
    initial:"initial",
    animate:"visible",
    variants:{
        initial: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {duration: 1}
        }
    }
}