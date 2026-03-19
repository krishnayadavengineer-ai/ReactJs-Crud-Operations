function Demo2() {
    const handlekeydown = (e) => {
        if (e.key < '0' || e.key > '9') {
           e.preventDefault();
        }
    }
    return (
        <div>
            <input type="text" onKeyDown={handlekeydown}></input>
        </div>
    )
}
export default Demo2;