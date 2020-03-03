import styled from 'styled-components'

export const HomeWrapper=styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
`
export const HomeLeft=styled.div`
    float:left;
    pargin-left:15px;
    padding-top:30px;
    width:625px;
    .banner-img{
        width:625px;
        height:270px;
    }
`
export const HomeRight=styled.div`
    width:280px;
    float:right;
  
`
export const ListItem=styled.div`
    height:131px;
    border-bottom:1px solid #eeeeee;
    margin-bottom:10px;
    float:left;
    margin-top:50px;
    width:625px;
`
export const TopicWrapper=styled.div`
   padding:10px;

`
export const TopicItem=styled.div`
    width:100px;
    height:25px;
    float:left;
    margin-left:10px;
    margin-top:10px;
    line-height:25px;
    text-align:center;
    border:1px solid red;
`
export const RecommendWrapper=styled.div`
   width:280px;
   padding:10px;
`
export const RecommendItem=styled.div`
   width:280px;
   height:50px;
   background:url(${(props)=>props.imgUrl});
   background-size:contain;

   margin-top:10px;

`