function Divider(props: { isVertical?: boolean }) {
    const { isVertical = false } = props;

    if (!isVertical) {
        return <div className="token-divider-x"></div>;
    }

    return <div className="token-divider-y"></div>;
}

export default Divider;
