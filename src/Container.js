import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '500px'
    }
  };

Modal.setAppElement('#root')

export default class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        onAfterOpen={this.props.afterOpenModal}
        onRequestClose={this.props.closeModal}
        style={customStyles}
        contentLabel="Extra Information Modal"
      >
        <div className="modal-wrapper">
          <div className="container text-center">
          {/* ref={_subtitle => (subtitle = _subtitle)} */}
            <h2>Additional Info for <i>{this.props.country}</i></h2>
            <p><strong>Languages: </strong>{this.props.languages}</p>
            <p><strong>Capital City: </strong>{this.props.capital}</p>
            <p><strong>Currency: </strong>{this.props.currency}</p>
            <p><strong>Country Code: </strong>{this.props.code}</p>
            <p><strong>Regional Bloc: </strong>{this.props.regionalBloc}</p>
            <button onClick={this.props.closeModal}>close</button>
          </div>
        </div>
      </Modal>
    )
  }
}