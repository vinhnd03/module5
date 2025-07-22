import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const FormLogin = () => {
    return (
        <div class="container d-flex justify-content-center align-items-center min-vh-100">
            <div class="col-md-6 col-lg-4">
                <div class="card shadow-lg">
                    <div class="card-body p-4">
                        <h3 class="text-center mb-4">Login</h3>
                        <form>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter email"></input>
                            </div>

                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Password"></input>
                            </div>

                            <div class="form-check mb-3">
                                <input type="checkbox" class="form-check-input" id="remember"></input>
                                    <label class="form-check-label" for="remember">Remember me</label>
                            </div>

                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <p class="text-center mt-3 mb-0">
                            <a href="#">Forgot password?</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormLogin;