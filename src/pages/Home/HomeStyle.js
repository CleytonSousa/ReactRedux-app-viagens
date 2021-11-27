import styled from 'styled-components';

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    grid-gap: 20px;
    list-style: none;

    @media(max-width: 982px){
        display: grid;
        grid-template-columns: repeat(2, 2fr);

        li{
            img{
                margin: 0 auto;
                max-width: 400px !important;
                width: 40vw;
            }

            span{
                padding: 5px;
            }

            strong{
                margin: 5px 0;
            }
        }
    }
    @media(max-width: 630px){
        display: grid;
        grid-template-columns: repeat(1, 2fr);

        li{
            img{
                max-width: 500px;
                width: 60vw;
            }
        }
    }

    .loadingScreen{
        width: 80vw;
        height: 75vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    li{
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 4px;
        padding: 13px;


        img{
            max-width: 280px;
            max-height: 220px;
            border-radius: 4px;
        }

        strong{
            font-size: 16px;
            line-height: 20px;
            color: #191919;
            margin-top: 10px;
        }

        button{
            margin-top: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            background: #191919;
            border: 0;
            border-radius: 4px;
            padding: 5px;

            div{
                display: flex;
                align-items: center;
                padding: 10px;
            }
        }
    }
`;
