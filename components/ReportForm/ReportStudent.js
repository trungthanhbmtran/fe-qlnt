import React, { PureComponent } from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { dateFormat } from '../../lib/functions';
import _ from 'lodash';
import styles from './Printer.css.js'


export default class ReportStudent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataList1: [],
      dataList2: [],
      dataItem: {},
      MSV : '',
      HOTEN: '',
      NGAYSINH: '',
      XLN1 : '',
    };
  }

  componentDidMount(){
    this._initData()
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(JSON.stringify(prevProps.dataList)!=JSON.stringify(this.props.dataList)){
      this._initData()
    }
  }

  _initData = () => {
    const dataList = this.props.dataList
    console.log('dataList',dataList)
    /** nếu có dữ liệu -> lấy item đầu tiên để hiển thị header */
    if(dataList.length){
      const dataItem = dataList[0]
      this.setState({dataItem })
      this.setState({HOTEN: `${dataItem.HOTEN[0]}`})
      this.setState({NGAYSINH: dataItem.NGAYSINH[0]})
      this.setState({MSV: `${dataItem.MSV[0]}`})
    }else{
      this.setState({dataItem: {} })
      this.setState({HOTEN: ''})
      this.setState({NGAYSINH: ''})
      this.setState({MSV: ''})
    }
    /** chia đôi data */
    const dataListChunk = _.chunk(dataList, Math.ceil(dataList.length/2))
    if(dataListChunk.length > 1){
      this.setState({dataList1: dataListChunk[0]})
      this.setState({dataList2: dataListChunk[1]})
    }else{
      this.setState({dataList1: dataListChunk[0] || []})
      this.setState({dataList2: []})
    }
  }
 
  _renderData = (styles) => {
    return this.state.dataList1.map((item, index) => {
      return (
        <tr>
          {this._renderBlock(index,styles)}
        </tr>
      )
    })
  }

  _renderKQHK = (ValueRender) =>{
    console.log('ValueRender',ValueRender)
    if(ValueRender===1){
      return (
        <>
         <tr>
            <td className={styles.textLeft} colSpan="7" >- Điểm trung bình tích lũy học kỳ 1 (thang điểm 4) :  </td>
            <td  style={styles.textLeft} colSpan="1" > {this.state.dataItem.HK1} </td>
            </tr>
            <tr>
            <td className={styles.textLeft} colSpan="7" >- Xếp loại rèn luyện:  </td>
            <td  style={styles.textLeft} colSpan="1" > {this.state.dataItem.XLN1} </td>
            </tr>
            <tr>
            <td className={styles.textLeft} colSpan="7" >- Xếp loại tốt nghiệp:  </td>
            <td  style={styles.textLeft} colSpan="1" > {this.state.dataItem.XEPLOAI1} </td>
         </tr>
        </>
      )
    }
    else if(ValueRender===2){
      return (
        <>
         <tr>
            <td className={styles.textLeft} colSpan="7" >- Điểm trung bình tích lũy học kỳ 2 (thang điểm 4) :  </td>
            <td  style={styles.textLeft} colSpan="1" > {this.state.dataItem.HK2} </td>
            </tr>
            <tr>
            <td className={styles.textLeft} colSpan="7" >- Xếp loại rèn luyện:  </td>
            <td  style={styles.textLeft} colSpan="1" > {this.state.dataItem.XLN2} </td>
            </tr>
            <tr>
            <td className={styles.textLeft} colSpan="7" >- Xếp loại tốt nghiệp:  </td>
            <td  style={styles.textLeft} colSpan="1" > {this.state.dataItem.XEPLOAI1} </td>
         </tr>
        </>
      )
    }
    else if(ValueRender===3){
      return (
        <>
         <tr>
            <td className={styles.textLeft} colSpan="7" >- Điểm trung bình tích lũy học kỳ 3 ( (thang điểm 4) :  </td>
            <td  style={styles.textLeft} colSpan="1" > {this.state.dataItem.HK3} </td>
            </tr>
            <tr>
            <td className={styles.textLeft} colSpan="7" >- Xếp loại rèn luyện:  </td>
            <td  style={styles.textLeft} colSpan="1" > {this.state.dataItem.XLN3} </td>
            </tr>
            <tr>
            <td className={styles.textLeft} colSpan="7" >- Xếp loại tốt nghiệp:  </td>
            <td  style={styles.textLeft} colSpan="1" > {this.state.dataItem.XEPLOAI1} </td>
         </tr>
        </>
      )
    }
    else if(ValueRender===4){
      return (
        <>
         <tr>
            <td className={styles.textLeft} colSpan="7" >- Điểm trung bình tích lũy học kỳ 4 ( (thang điểm 4) :  </td>
            <td  style={styles.textLeft} colSpan="1" > {this.state.dataItem.HK4} </td>
            </tr>
            <tr>
            <td className={styles.textLeft} colSpan="7" >- Xếp loại rèn luyện:  </td>
            <td  style={styles.textLeft} colSpan="1" > {this.state.dataItem.XLN4} </td>
            </tr>
            <tr>
            <td className={styles.textLeft} colSpan="7" >- Xếp loại tốt nghiệp:  </td>
            <td  style={styles.textLeft} colSpan="1" > {this.state.dataItem.XEPLOAI1} </td>
         </tr>
        </>
      )
    }
    else if(ValueRender===5){
      return (
        <>
         <tr>
            <td className={styles.textLeft} colSpan="7" >- Điểm trung bình tích lũy học kỳ 5 (thang điểm 4) :  </td>
            <td  style={styles.textLeft} colSpan="1" > {this.state.dataItem.HK5} </td>
            </tr>
            <tr>
            <td className={styles.textLeft} colSpan="7" >- Xếp loại rèn luyện:  </td>
            <td  style={styles.textLeft} colSpan="1" > {this.state.XLN5} </td>
            </tr>
            <tr>
            <td className={styles.textLeft} colSpan="7" >- Xếp loại tốt nghiệp:  </td>
            <td  style={styles.textLeft} colSpan="1" > {this.state.dataItem.XEPLOAI1} </td>
         </tr>
        </>
      )
    }
    else if(ValueRender===6){
      return (
        <>
         <tr>
            <td className={styles.textLeft} colSpan="7" >- Điểm trung bình tích lũy học kỳ 6 ( (thang điểm 4) :  </td>
            <td  style={styles.textLeft} colSpan="1" > {this.state.dataItem.HK6} </td>
            </tr>
            <tr>
            <td className={styles.textLeft} colSpan="7" >- Xếp loại rèn luyện:  </td>
            <td  style={styles.textLeft} colSpan="1" > {this.state.XLN6} </td>
            </tr>
            <tr>
            <td className={styles.textLeft} colSpan="7" >- Xếp loại tốt nghiệp:  </td>
            <td  style={styles.textLeft} colSpan="1" > {this.state.dataItem.XEPLOAI1} </td>
         </tr>
        </>
      )
    }
    else {
      return (
        <>
         <tr>
            <td className={styles.textLeft} colSpan="7" >- Điểm trung bình tích lũy toàn khóa (thang điểm 4) :  </td>
            <td  style={styles.textLeft} colSpan="1" > {this.state.dataItem.TBKHOA} </td>
            </tr>
            <tr>
            <td className={styles.textLeft} colSpan="7" >- Xếp loại rèn luyện:  </td>
            <td  style={styles.textLeft} colSpan="1" > {this.state.XLN6} </td>
            </tr>
            <tr>
            <td className={styles.textLeft} colSpan="7" >- Xếp loại tốt nghiệp:  </td>
            <td  style={styles.textLeft} colSpan="1" > {this.state.dataItem.HK6} </td>
         </tr>
        </>
      )
    }
  
  }

  _renderBlock = (index,styles) => {
    const item1 = this.state.dataList1[index] || null
    const item2 = this.state.dataList2[index] || null
    return(
      <>
      {(item1) && 
        this._renderItem(item1,styles)
      }
      <td></td>
      {(item2) && 
        this._renderItem(item2,styles)
      }
      
      </>
    )
  }
  
  _renderItem = (item,styles) => {
    console.log("kieu ban dau ",typeof item.GIATRILONNHAT)
    console.log("kieu sau khi parse",typeof parseFloat(item.GIATRILONNHAT))
    console.log("dataitem",this.state.dataItem.MSV[0])
    return (
      <>
        <td style={styles.borderTable}>{item.RowNum}</td>
        <td style={styles.itemMH}>{item.Ten_Monhoc}</td>
        <td style={styles.borderTable}>{item.Heso_Mon}</td>
        <td style={styles.borderTable}>{parseFloat(item.GIATRILONNHAT)}</td>
        <td style={styles.borderTable}>{parseFloat(item.GIATRI4LONNHAT)}</td>
      </>
    )
  }
  
  render() {
    console.log("thuoc tinh ",this.props.dataList)
    console.log("thuoc tinh dataRender ",this.props.dataRender)
    //console.log("thuoc tinh ",this.state.MSV)
    return (
      <div>
        <ReactHTMLTableToExcel
          className="download-table-xls-button"
          table="tablestudent"
          filename={this.props.fileName}
          sheet={this.props.sheetName}
          buttonText={this.props.buttontext}
          className="buttonDownloadExcel"/>
        <style jsx global>{`
          .buttonDownloadExcel {
            background-color: #EEE;
            color: #333;
            border-radius: 5px;
            border: 1px #DDD solid;
            padding: 10px 20px;
            margin-bottom: 15px
          }
        `}</style>
        <table id="tablestudent" style={styles.root}>
          <tbody>
            <tr>
               <th colSpan="5" >ỦY BAN NHÂN DÂN TỈNH ĐẮK LẮK</th>
                  <td></td>
               <th colSpan="5">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM </th>
            </tr>
            <tr>
                <th colSpan="5"  >TRƯỜNG CAO ĐẲNG KỸ THUẬT ĐĂK LĂK</th>
                  <td></td>
                <th colSpan="5" style={styles.stylesLogo} > Độc lập - Tự do - Hạnh Phúc</th>
            </tr>
            <tr>
            </tr>
            <tr>
            </tr>
            <tr>
              <td></td>
              <th colSpan="9" style={styles.tittle} >BẢNG ĐIỂM</th>
            </tr> 
            <tr>
              <td colSpan="8" className={styles.textRight}></td>
            </tr>
            <tr>
                <td></td>
                <td colSpan="1" >Họ và tên học sinh :</td>
                <td colSpan="5" style={styles.textLeft}> {this.state.HOTEN} </td>
                <td colSpan="1" >Mã HSSV: </td>
                <td colSpan="3" style={styles.textLeft}>{this.state.MSV}</td>
            </tr>
            <tr>
                <td></td>
                <td colSpan="1" className={styles.header}>Ngày sinh :</td>
                <td colSpan="5" style={styles.textLeft}>{dateFormat(this.state.NGAYSINH,'/')}</td>
                <td colSpan="1" >Trình độ: </td>
                <td colSpan="3" style={styles.textLeft}>{this.state.dataItem.Ten_He_Daotao}</td>
            </tr>
            <tr>
                <td></td>
                <td colSpan="1" className={styles.header}>Ngành/nghề đào tạo : </td>
                <td colSpan="5" style={styles.textLeft}>{this.state.dataItem.Ten_Nganhnghe}</td>
                <td colSpan="1" className={styles.header}>Hình thức đào tạo: </td>
                <td colSpan="3" style={styles.textLeft}>{this.state.dataItem.Tenloai_Daotao}</td>
            </tr>
            <tr>
                <td></td>
                <td colSpan="1" className={styles.header}>Lớp :</td>
                <td colSpan="5" style={styles.textLeft}>{this.state.dataItem.Ten_Lophoc}</td>
                <td colSpan="1" className={styles.header}>Niên khóa:</td>
                <td colSpan="3" style={styles.textLeft}>{this.state.dataItem.Nam_Batdau} - {this.state.dataItem.Nam_Ketthuc}</td>

            </tr>
            <tr>
              <td colSpan="8" className={styles.textRight}></td>
            </tr>
            <tr>
                <td style={styles.HeaderSTTPortrain}>TT</td>
                <td style={styles.HeaderMH}>TÊN MÔN HỌC/MÔ ĐUN</td>
                <td style={styles.HeaderTC}>SỐ TC</td>
                <td style={styles.HeaderDIEM10}>Thang điểm 10</td>
                <td style={styles.HeaderDIEM4}>Thang điểm 4</td>
                <td style={styles.SpaceTable}></td>
                <td style={styles.HeaderSTTPortrain}>TT</td>
                <td style={styles.HeaderMH}>TÊN MÔN HỌC/MÔ ĐUN</td>
                <td style={styles.HeaderTC}>SỐ TC</td>
                <td style={styles.HeaderDIEM10}>Thang điểm 10</td>
                <td style={styles.HeaderDIEM4}>Thang điểm 4</td>
            </tr> 
            {this._renderData(styles)} 
          </tbody>
          <tr>
            <td colSpan="8" className={styles.textRight}></td>
          </tr>
          {this._renderKQHK(parseInt(this.props.dataRender))} 
          <tr>
          <td className={styles.textLeft} colSpan="11" >- Quyết định công nhận tốt nghiệp số ..../QD-CĐKTĐL ngày .../.../.... của Hiệu trưởng Trường Cao đẳng Kỹ thuật Đắk Lắk </td>
          </tr>
          <tr>
            <td colSpan="8" className={styles.textRight}></td>
          </tr>
          <tr>
            <td colSpan="7" className={styles.textRight}></td>
            <th colSpan="3" style={styles.stylesDateYear}>Đắk Lắk, ngày .... tháng ... năm...</th>
          </tr>
          <tr>
            <td></td>
            <th colSpan="1" className={styles.textRight}>Người lập</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <th colSpan="3" className={styles.textRight}>TL.HIỆU TRƯỞNG<br/>TP.Đào tạo,NCKH & QHQT</th>
          </tr>
        </table>
      </div>
    );
  }
}