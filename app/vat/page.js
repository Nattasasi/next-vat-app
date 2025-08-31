export default function Page() {
    return (
        <div>
            <h1>VAT Calculator</h1>
            <p>
                Price: <input type="number" placeholder="Enter price" />
                <br/>
                <button>Calculate VAT</button>
                <div>VAT Amount: </div>
                <div>Total Amount: </div>
            </p>
        </div>
    );
}