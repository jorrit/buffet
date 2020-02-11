/**
 *
 * TableRowEmpty
 *
 */

import styled from 'styled-components';
import colors from '../../assets/styles/colors';

const TableRowEmpty = styled.tr`
  width: 100%;
  height: 108px;
  background: #ffffff;
  td {
    height: 106px;
    line-height: 106px;
    font-size: 1.3rem;
    font-weight: 400;
    color: ${colors.blueTxt};
    text-align: center;
    border-collapse: collapse;
    border-top: 1px solid #f1f1f2 !important;
  }
`;

export default TableRowEmpty;
