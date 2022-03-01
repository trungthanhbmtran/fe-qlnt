import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const renderAdd = (props, ref) => <AddBox {...props} ref={ref} />
const renderCheck = (props, ref) => <Check {...props} ref={ref} />
const renderClear = (props, ref) => <Clear {...props} ref={ref} />
const renderDelete = (props, ref) => <DeleteOutline {...props} ref={ref} />
const renderDetailPanel = (props, ref) => <ChevronRight {...props} ref={ref} />
const renderEdit = (props, ref) => <Edit {...props} ref={ref} />
const renderFilter = (props, ref) => <FilterList {...props} ref={ref} />
const renderExport = (props, ref) => <SaveAlt {...props} ref={ref} />
const renderFirstPage = (props, ref) => <FirstPage {...props} ref={ref} />
const renderLastPage = (props, ref) => <LastPage {...props} ref={ref} />
const renderNextPage = (props, ref) => <ChevronRight {...props} ref={ref} />
const renderPreviousPage = (props, ref) => <SaveAlt {...props} ref={ref} />
const renderResetSearch = (props, ref) => <Clear {...props} ref={ref} />
const renderSearch = (props, ref) => <Search {...props} ref={ref} />
const renderSortArrow = (props, ref) => <ArrowDownward {...props} ref={ref} />
const renderThirdStateCheck = (props, ref) => <Remove {...props} ref={ref} />
const renderViewColumn = (props, ref) => <ViewColumn {...props} ref={ref} />
 
const TableIcons = {
    Add: forwardRef(renderAdd),
    Check: forwardRef(renderCheck),
    Clear: forwardRef(renderClear),
    Delete: forwardRef(renderDelete),
    DetailPanel: forwardRef(renderDetailPanel),
    Edit: forwardRef(renderEdit),
    Export: forwardRef(renderExport),
    Filter: forwardRef(renderFilter),
    FirstPage: forwardRef(renderFirstPage),
    LastPage: forwardRef(renderLastPage),
    NextPage: forwardRef(renderNextPage),
    PreviousPage: forwardRef(renderPreviousPage),
    ResetSearch: forwardRef(renderResetSearch),
    Search: forwardRef(renderSearch),
    SortArrow: forwardRef(renderSortArrow),
    ThirdStateCheck: forwardRef(renderThirdStateCheck),
    ViewColumn: forwardRef(renderViewColumn)
};

export default TableIcons