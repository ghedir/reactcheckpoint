import "./App.css";

function App() {
  return (
    <form className="form-horizontal form-login" method="POST" action="login">
      <fieldset>
        <legend>login HERE</legend>
        <p>Hello My friend </p>
        <div className="form-group">
          <label className="col-md-4 control-label" for="email">
            Username
          </label>
          <div className="col-md-12">
            <input
              id="email"
              name="username"
              type="text"
              placeholder="Enter your username"
              className="form-control input-md"
              required=""
              autoComplete="off"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-4 control-label" for="password">
            Password
          </label>
          <div className="col-md-12">
            <input               
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="form-control input-md"
              required=""
              autoComplete="off"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-4 control-label" for="save"></label>
          <div className="col-md-12">
            <button name="save" id="save" class="btn btn-success" >
              Login
            </button>
          </div>
          
        </div>
      </fieldset>
    </form>
  );
}

export default App;
