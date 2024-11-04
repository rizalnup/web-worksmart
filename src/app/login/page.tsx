export default function Login() {
    return (
        <>
            <div className="container-fluid bg-light sticky-top">
                <div className="row">
                    <div className="mb-2 mt-2 ms-auto col-auto">
                        <button className="btn btn-primary">
                            Register
                        </button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center mb-2">
                    <div className="col-auto text-light mt-4">
                        <h1>Login</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto mt-4 bg-light rounded pt-2 pb-2">
                        <form>
                            <div className="form-group row">
                                <label htmlFor="number" className="col-auto col-form-label">Number:</label>
                                <div className="col">
                                    <input type="text" id="number" placeholder="Enter phone number" className="form-control"></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="password" className="col-auto col-form-label">Password:</label>
                                <div className="col">
                                    <input type="password" id="password" placeholder="Enter password" className="form-control"></input>
                                </div>
                            </div>
                            <div className="row justify-content-center mt-4">
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-primary">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
