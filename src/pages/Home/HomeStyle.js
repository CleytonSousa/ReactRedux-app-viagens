import styled from 'styled-components';

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    grid-gap: 20px;
    list-style: none;

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
