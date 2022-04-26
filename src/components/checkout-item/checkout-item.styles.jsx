import styled from 'styled-components';

export const CheckOutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`
export const Span = styled.span`
  width: 23%;
`
export const SpanQty = styled(Span)`
  display: flex;

`
export const Arrow = styled.div`
  cursor: pointer;
  
  :first-child:hover {
    color: red;
  }

  :last-child:hover {
    color: green;
  }
`

export const Value = styled.div`
  margin: 0 10px;
`


export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;