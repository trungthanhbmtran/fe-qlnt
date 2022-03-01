const columnsUser = [
    { title: 'STT', field: 'RowNum' },
    { title: 'HọTên', field: 'HOTEN' },
    { title: 'TênNhóm', field: 'TenNhom' },
    { title: 'ĐơnVị', field: 'TENDONVI' },
    { title: 'UserName', field: 'UserName'},
    { title: 'Create', field: 'CreatedDate' },
    { title: 'LastLogin', field: 'LastLogin'},
    { title: 'ID', field: 'User_ID' },
    { title: 'TrạngThái',
    render: rowData  =>{ if(rowData.Status==true){
      return 'Đang hoạt động'
    }else{
      return 'Ngừng hoạt động'
    }}
    }
]

const columnsTest = [
    { title: 'STT', field: 'RowNum' },
    { title: 'HọTên', field: 'HOTEN' },
    { title: 'MSV', field: 'MSV' },
    { title: 'TênLớp', field: 'Ten_Lophoc' },
    { title: 'Môn', field: 'Ten_Monhoc' },
    { title: 'HọcKỳ', field: 'Ten_Hocky' },
    { title: 'TXuyên1', field: 'tx1' },
    { title: 'TXuyên2', field: 'tx2' },
    { title: 'Đkỳ1', field: 'dk1' },
    { title: 'Đkỳ2', field: 'dk2' },
    { title: 'Đkỳ3', field: 'dk3' },
    { title: 'Đkỳ4', field: 'dk4' },
    { title: 'Đkỳ5', field: 'dk5' },
    { title: 'Đkỳ6', field: 'dk6' },
    { title: 'TBKT', field: 'TBDK1'},
    { title: 'Ktra1', field: 'kt1' },
    { title: 'kTra2', field: 'kt2' },
    { title: 'TBM1', field: 'TBM1'},
    { title: 'TBM2', field: 'TBM2' },
    { title: 'He4L1', field: 'He4L1'},
    { title: 'He4L2', field: 'He4L2' },
    { title: 'XL1', field: 'DIEMCHUL1' },
    { title: 'XL2', field: 'DIEMCHUL2' },
    { title: 'Tình trạng', field: 'Ghichu' },
  ]

const columnsClass = [
    { title: 'STT', field: 'RowNum' },
    { title: 'Tên Lớp', field: 'Ma_Lophoc' },
    { title: 'Giáo viên chủ nhiệm', field: 'HOTEN' },
    { title: 'ID_Sys', field: 'ID_Lophoc' },
    { title: 'NK', field: 'ID_Nienkhoa' },
    { title: 'NN', field: 'ID_Nganhnghe' },
]


const columnsSemester = [
  { title: 'Tên Niên Khóa', field: 'Ten_Nienkhoa' },
  { title: 'Năm bắt đầu', field: 'Nam_Batdau' },
  { title: 'Số Năm', field: 'So_Nam' },
  { title: 'Số Môn Bắt Buộc', field: 'So_Monhoc_Batbuoc' },
  { title: 'Số Môn Tự chọn', field: 'So_Monhoc_Tuchon' },
  { title: 'Số Môn Cần Đạt', field: 'Tongso_Mon_Candat' },
  { title: 'Loại Đào Tạo', field: 'Tenloai_Daotao' },
  { title: 'Hệ Đào Tạo', field: 'Ten_He_Daotao' },
  { title: 'ID he DT', field: 'ID_He_Daotao' },
  { title: 'ID loai DT', field: 'ID_Loai_Daotao' },
]

const columnsSubjects = [
  { title: 'ID_SYS', field: 'ID_Monhoc' },
  { title: 'Tên Môn', field: 'Ten_Monhoc' },
  { title: 'Mã Môn', field: 'Ma_Monhoc' },
  { title: 'Tiết học', field: 'So_Tiethoc' },
  { title: 'Tiết Thực hành ', field: 'Sotiet_Thuchanh'},
  { title: 'Tổng số tiết', field: 'Tongso_Tiet'},
  { title: 'Tiết Kiểm tra', field: 'Sotiet_Kiemtra'},
  { title: 'Hệ số Môn', field: 'Heso_Mon' },
  { title: 'Hệ', field: 'Ten_He_Daotao' },
  { title: 'Ngành', field: 'Ten_Nganhnghe'},
  { title: 'GiáoViênPhụTrách', field: 'HOTEN' },
  { title: 'Nhóm Kỳ', field: 'ID_nhom' },
]

const columnsScoresReport = [
  { title: 'STT', field: 'RowNum', 
  headerStyle : {
    maxWidth : 10,
    paddingLeft : 5,
  },
  cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'
  },},
  { title: 'HọTên', field: 'HOTEN',
  cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    position: 'sticky',
    left :0
  },},
  { title: 'MSV', field: 'MSV', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  }, },
  { title: 'TênLớp', field: 'Ten_Lophoc', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  }, },
  { title: 'Môn', field: 'Ten_Monhoc',
  cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  }, },
  { title: 'HọcKỳ', field: 'Ten_Hocky', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'
  }, },
  { title: 'Thường Xuyên1', field: 'tx1', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'
  }, },
  { title: 'Thường Xuyên2', field: 'tx2' , cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  },},
  { title: 'Định kỳ 1', field: 'dk1', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  }, },
  { title: 'Định kỳ 2', field: 'dk2', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  }, },
  { title: 'Định kỳ 3', field: 'dk3', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  }, },
  { title: 'Định kỳ 4', field: 'dk4', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  }, },
  { title: 'Định kỳ 5', field: 'dk5', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  }, },
  { title: 'Định kỳ 6', field: 'dk6', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  }, },
  { title: 'TrungBình KiểmTra', field: 'TBDK1', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  },},
  { title: 'Thi1', field: 'kt1', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  }, },
  { title: 'Thi2', field: 'kt2', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  }, },
  { title: 'TrungBình MônLần1', field: 'TBM1', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  },},
  { title: 'TrungBình MônLần2', field: 'TBM2', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  }, },
  { title: 'TrungBình Hệ4 Lần1', field: 'He4L1', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  },},
  { title: 'TrungBình Hệ4 Lần2', field: 'He4L2', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  }, },
  { title: 'XếpLoại Lần 1', field: 'DIEMCHUL1', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  }, },
  { title: 'XếpLoại Lần 2', field: 'DIEMCHUL2', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'
  }, },
  { title: 'Tình trạng', field: 'Ghichu', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'
  }, },
  { title: 'Sys_Update', field: 'ID_Mon_Lophoc', hidden : true},

]
const columnsScores = [
  { title: 'STT', field: 'RowNum', 
  headerStyle : {
    maxWidth : 10,
    paddingLeft : 5,
  },
  cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'
  },},
  { title: 'HọTên', field: 'HOTEN',
  cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    position: 'sticky',
    left :0
  },},
  { title: 'MSV', field: 'MSV', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  }, },
  { title: 'TênLớp', field: 'Ten_Lophoc', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  }, },
  { title: 'Môn', field: 'Ten_Monhoc',
  cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  }, },
  { title: 'HọcKỳ', field: 'Ten_Hocky', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'
  }, },
  { title: 'Thường Xuyên1', field: 'tx1', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'
  }, },
  { title: 'Thường Xuyên2', field: 'tx2' , cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  },},
  { title: 'Định kỳ 1', field: 'dk1', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  }, },
  { title: 'Định kỳ 2', field: 'dk2', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  }, },
  { title: 'Định kỳ 3', field: 'dk3', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  }, },
  { title: 'Định kỳ 4', field: 'dk4', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  }, },
  { title: 'Định kỳ 5', field: 'dk5', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  }, },
  { title: 'Định kỳ 6', field: 'dk6', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  }, },
  { title: 'TrungBình KiểmTra', field: 'TBDK1', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  },},
  { title: 'Thi1', field: 'kt1', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  }, },
  { title: 'Thi2', field: 'kt2', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  }, },
  { title: 'TrungBình MônLần1', field: 'TBM1', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  },},
  { title: 'TrungBình MônLần2', field: 'TBM2', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  }, },
  { title: 'TrungBình Hệ4 Lần1', field: 'He4L1', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  },},
  { title: 'TrungBình Hệ4 Lần2', field: 'He4L2', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  }, },
  { title: 'XếpLoại Lần 1', field: 'DIEMCHUL1', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'

  }, },
  { title: 'XếpLoại Lần 2', field: 'DIEMCHUL2', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'
  }, },
  { title: 'Tình trạng', field: 'Ghichu', cellStyle: {
    backgroundColor: '#EEE',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign : 'center'
  }, },
  { title: 'Sys_Update', field: 'ID_Mon_Lophoc', hidden : true},

]

const columnsMedicine = [
  { title: 'Tên Thuốc', field: 'Ten_Nienkhoa' },
  { title: 'Nhóm Thuốc', field: 'Nam_Batdau' },
  { title: 'Miêu tả', field: 'So_Nam' },
]

const printTable = (value) => {
    const RenderTable = {
      getuser: columnsUser,
      gettest: columnsTest,
      getsemester : columnsMedicine,
      getclasses : columnsClass,
      getsubjects : columnsSubjects,
      getscore : columnsScores,
      getscorestatistic : columnsScoresReport,
      getscorestatistic : columnsScoresReport,
      getMedicine : columnsMedicine,
      getcheck: ['grape', 'plum'],
    };
    return RenderTable[value] || [];
}


export default printTable