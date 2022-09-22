const Player = (status = "human") => {
    const getStatus = () => status;
    
    return { getStatus };
}

export { Player };