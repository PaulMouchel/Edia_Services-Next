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

export const slideFromLeft = {
    initial:"initial",
    animate:"visible",
    variants:{
        initial: {
            x: "-100vh"
        },
        visible: {
            x: 0,
            transition: {duration: 1}
        }
    }
}