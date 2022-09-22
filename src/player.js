const Player = (status = "human") => {
    const isAI = () => {
        if (status !== "AI") {
            return false;
        } else {
            return true;
        }
    } 

    return { isAI };
}

export { Player };