const withAuth = (wrapedComponnet) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isAuth: false,
      };
    }
    componentDidMount() {
      const isAuth = props.name === "vikash";
      this.setState({ isAuth });
    }

    render() {
        const {isAuth} = this.state;
         if (isAuth) {
            return <wrapedComponnet {...this.props} />
         }else{
            return <LoginComponet />
            // or
            return <Redirect to="/login" />
         }
    }
  };
};


// import withAuth from ''

// const AuthComponet = withAuth(MyComponent)