const RenderValueInto  = (getValue,KeyRender,ValueRender,KeyFidler = {},ValueFidler ={}) =>{
    return {
        getValue : getValue ,
        KeyRender : KeyRender,
        ValueRender : ValueRender,
        KeyFidler: KeyFidler,
        ValueFidler : ValueFidler
    }
} 

const columnsUser = [
    RenderValueInto('semestertype','ID_He_Daotao','Ten_He_Daotao'),
    RenderValueInto('branches','ID_Nganhnghe','Ten_Nganhnghe'),
    RenderValueInto('classes','ID_Lophoc','Ten_Lophoc')
]



const printSelectReport = (value) => {
    const RenderSelectReport = {
      getscore: columnsUser,
      getcheck: ['grape', 'plum'],
    };
    return RenderSelectReport[value] || [];
}


export default printSelectReport