import React, { Component } from 'react';

class Typewriter extends Component {
  state = {
    dataText: ["Join the tracking movement", "Track OpenGov Deliverables", "Ta tsifsa rop", "Ta tsifsa kari"],
    text: '',
    isDeleting: false,
    loopNum: 0,
    typingSpeed: 200,
  };

  componentDidMount() {
    this.handleType();
  }

  handleType = () => {
    const { dataText, isDeleting, loopNum, text } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    this.setState({
      text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 100 : 200,
    });

    if (!isDeleting && text === fullText) {
      setTimeout(() => this.setState({ isDeleting: true }), 2000);
    } else if (isDeleting && text === '') {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1,
      });
    }

    setTimeout(this.handleType, isDeleting ? 100 : 200);
  };

  render() {
    return (
      <div className=' text-white text-3xl mt-5 mb-5 min-h-[50px]'>
        <h1>
          <a href="#/" className="typewrite">
            <span className="wrap">{this.state.text}</span>
          </a>
        </h1>
       
      </div>
    );
  }
}

export default Typewriter;
