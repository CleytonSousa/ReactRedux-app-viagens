import styled from 'styled-components';

export const Container = styled.div`
  #title{
      color: #fff;
  }

  section{
    padding: 20px;
    margin-bottom: 10px;
    background: #fff;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    #amount{
        display: flex;
        align-items: center;

        button{
            margin: 0 5px;
        }

        input{
            width: 50px;
        }
    }

    img{
        height: 100px;
    }

    button{
        border: 0;
        background: #fff;

    }
  }

  footer{
      button{
          border: 0;
          display: flex;
          padding: 10px;
          text-transform: uppercase;
          border-radius: 5px;
          margin-top: 10px;
      }
  }
`;
