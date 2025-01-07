import React from 'react';
import styled from 'styled-components';

const PhoneInput: React.FC = () => {
  return (
    <StyledWrapper>
      <div className="ui-wrapper w-full">
        <input defaultChecked id="Austria" name="flag" type="radio" />
        
        <input id="France" name="flag" type="radio" />
        <input id="Mada" name="flag" type="radio" />
        
        
        
        <input className="dropdown-checkbox" name="dropdown" id="dropdown" type="checkbox" />
        <label className="dropdown-container" htmlFor="dropdown" />
        <div className="input-wrapper">
          <legend>
          </legend>
          <div className="textfield">
            <input pattern="\d+" maxLength={11} id="phonenumber" type="text"  />
            <span className="invalid-msg">This is not a valid phone number</span>
          </div>
        </div>
        <div className="select-wrapper">
          <ul>
            <li className="France"><label htmlFor="France"><span>🇫🇷</span>France (+33)</label></li>
            <li className="Mada"><label htmlFor="Mada"><span>🇲🇬</span>Mada (+261)</label></li>
            
          </ul>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .ui-wrapper {
    --width:194px;
    --height: 36px;
    --background: #fff;
    --text-color: rgb(73, 73, 73);
    --border-color: rgb(185, 184, 184);
    --border-focus-color: black;
    --shadow-color: rgba(34, 60, 80, 0.2);
    --shadow-focus-color: rgba(0, 110, 255, 0.2);
    --dropdown-button-color: #e6e6e6;
    --dropdown-button-hover-color: #dad9d9;
  }

  .ui-wrapper *,
  .ui-wrapper *::before,
  .ui-wrapper *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-family: sans-serif;
    color: var(--text-color);
  }

  .ui-wrapper {
    width: var(--width);
    height: var(--height);
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    border-radius: 10px;
    position: relative;
    border: 1px solid var(--border-color);
    background-color: var(--background);
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-right: 5px;
    -webkit-transition: .4s;
    -o-transition: .4s;
    transition: .4s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .ui-wrapper>input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
    width: 0;
    height: 0;
    opacity: 0;
    position: absolute;
    left: 9999px;
  }

  .dropdown-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 10px;
    cursor: pointer;
    border-radius: 9px 0 0 9px;
    background-color: var(--dropdown-button-color);
  }

  .dropdown-container::before {
    content: "🇦🇹";
    font-size: 20px;
    background: none !important;
  }

  .dropdown-container::after {
    content: "";
    background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjNDk0OTQ5IiB3aWR0aD0iNzAwcHQiIGhlaWdodD0iNzAwcHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDcwMCA3MDAiCiAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxwYXRoCiAgICAgICAgZD0ibTM4MC4zOSA0ODQuNzkgMzA3LjA0LTMwNS45OWMxNi43NjYtMTcuODEyIDE2Ljc2Ni00NS4wNTkgMC02MS44MjgtMTYuNzY2LTE2Ljc2Ni00NS4wNTktMTYuNzY2LTYxLjgyOCAwbC0yNzUuNiAyNzUuNi0yNzUuNi0yNzUuNmMtMTcuODEyLTE2Ljc2Ni00NS4wNTktMTYuNzY2LTYxLjgyOCAwLTE2Ljc2NiAxNi43NjYtMTYuNzY2IDQ0LjAxMiAwIDYxLjgyOGwzMDUuOTkgMzA1Ljk5YzE3LjgxMiAxNi43NjYgNDUuMDU5IDE2Ljc2NiA2MS44MjggMHoiCiAgICAgICAgZmlsbC1ydWxlPSJjdXJyZW50Q29sb3IiIC8+Cjwvc3ZnPg==");
    width: 12px;
    height: 12px;
    background-position: center;
    background-size: cover;
    margin-left: 5px;
    -webkit-transition: .2s;
    -o-transition: .2s;
    transition: .2s;
  }

  .select-wrapper {
    width: var(--width);
    position: absolute;
    top: calc(var(--height) + 20px);
    left: 0;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: .2s;
    -o-transition: .2s;
    transition: .2s;
  }

  .select-wrapper ul {
    width: 100%;
    background-color: #e5e5e5;
    border-radius: 10px;
    padding: 10px;
    margin: 0;
    list-style: none;
    height: 200px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
   
    overflow-y: auto;
    white-space: nowrap;
  }

  .select-wrapper ul li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
  }

  .select-wrapper ul li label {
    width: 100%;
  }

  .select-wrapper ul li,
  .select-wrapper ul li * {
    cursor: pointer;
  }

  .select-wrapper ul li:hover {
    background: lightgray;
  }

  .select-wrapper ul li span {
    display: inline-block;
    margin-right: 15px;
  }

  .input-wrapper {
    width: 100%;
    padding-left: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    row-gap: 2px;
  }

  .input-wrapper legend {
    font-size: 11px;
  }

  .input-wrapper .textfield {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .input-wrapper .textfield::before {
    content: "+31";
    margin-right: 5px;
    white-space: nowrap;
  }

  .input-wrapper .textfield input {
    width: 90%;
    font-size: 16px;
    outline: none;
    border: none;
    background: none;
  }

  .invalid-msg {
    font-size: 12px;
    position: absolute;
    color: red;
    top: 115%;
    left: 0;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: .2s;
    -o-transition: .2s;
    transition: .2s;
  }

  /* actions */

  #phonenumber:invalid+.invalid-msg {
    top: 110%;
    opacity: 1;
    visibility: visible;
  }

  .ui-wrapper:focus-within {
    border-color: var(--border-focus-color);
    
  }

  .dropdown-container:hover {
    background-color: var(--dropdown-button-hover-color);
  }

  .dropdown-checkbox:checked~.select-wrapper {
    top: calc(var(--height) + 5px);
    opacity: 1;
    visibility: visible;
  }

  .dropdown-checkbox:checked+.dropdown-container::after {
    rotate: 180deg;
    translate: 0 -2px;
  }


  .ui-wrapper input#France:checked~.dropdown-container::before,
  .ui-wrapper input#France:checked~.select-wrapper li.France {
    content: "🇫🇷";
    background-color: lightgray;
  }

  .ui-wrapper input#Mada:checked~.dropdown-container::before,
  .ui-wrapper input#Mada:checked~.select-wrapper li.Mada {
    content: "🇲🇬";
    background-color: lightgray;
  }

  .ui-wrapper input#France:checked~.input-wrapper .textfield::before {
    content: "+33";
  }

  .ui-wrapper input#Mada:checked~.input-wrapper .textfield::before {
    content: "+261";
  }
  
  }`;

export default PhoneInput;
