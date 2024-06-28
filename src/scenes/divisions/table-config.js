/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, Typography } from "@mui/material";
import { createColumnHelper } from "@tanstack/react-table";
import { setDepartaments } from "../../store/depsStore";
import { setDepMetaData } from "../../store/applicationsStore";

const columnHelper = createColumnHelper();

export const divisionsTableColumns = [
  columnHelper.accessor("expertStat.expert", {
    id: "expert",
    header: "Подразделение",
    cell: ({ getValue, row: { original } }) => {
      const onClick = () => {
        setDepartaments(original.childList ?? []);
        const exportMeta = original.expertStat;
        setDepMetaData({
          NEW: exportMeta.newTicket,
          ALL: exportMeta.all,
<<<<<<< HEAD
          CLOSED: exportMeta.closedExpired,
          CLOSED_EXPIRED: 0,
          ASSIGNED: exportMeta.assignedTicket,
          EXPIRED: exportMeta.expired,
=======
          CLOSED: exportMeta.closedTicket,
          CLOSED_EXPIRED: 0,
          ASSIGNED: exportMeta.assignedTicket,
          EXPIRED: 0,
>>>>>>> 53571871c2d56cc44bd37d5e3e21ef91f3f22484
          WAITING: exportMeta.waitingTicket,
          SOLVED: exportMeta.solvedTicket,
        });
      };
<<<<<<< HEAD
      console.log(divisionsTableColumns);
=======

>>>>>>> 53571871c2d56cc44bd37d5e3e21ef91f3f22484
      return (
        <Link
          sx={{
            color: original?.childList ? "#709fdc" : "#000000",
            textDecoration: original?.childList ? "underline" : "none",
            cursor: original?.childList ? "pointer" : "auto",
          }}
          onClick={original?.childList ? onClick : undefined}
        >
          {getValue()}
        </Link>
      );
    },
  }),
  columnHelper.accessor("expertStat.all", {
    id: "all",
    header: "Всего",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("expertStat.newTicket", {
    id: "overdue",
    header: "Просроченные",
    cell: (info) => <Typography color="#f43434">{info.getValue()}</Typography>,
  }),
  columnHelper.accessor("expertStat.waitingTicket", {
    id: "waiting",
    header: "В ожидании",
    cell: (info) => <Typography color="#f67d0c">{info.getValue()}</Typography>,
  }),
  columnHelper.accessor("expertStat.assignedTicket", {
    id: "in-process",
    header: "В работе",
    cell: (info) => <Typography color="#3748ed">{info.getValue()}</Typography>,
  }),
<<<<<<< HEAD
  columnHelper.accessor("expertStat.closedExpired", {
=======
  columnHelper.accessor("expertStat.solvedTicket", {
>>>>>>> 53571871c2d56cc44bd37d5e3e21ef91f3f22484
    id: "сlosed-in-arrears",
    header: "Закр. с просрочкой",
    cell: (info) => <Typography color="#505156">{info.getValue()}</Typography>,
  }),
<<<<<<< HEAD
  columnHelper.accessor("expertStat.expired", {
    id: "expired",
    header: "Решенные",
    cell: (info) => <Typography color="#f78e82">{info.getValue()}</Typography>,
  }),
=======
>>>>>>> 53571871c2d56cc44bd37d5e3e21ef91f3f22484
  columnHelper.accessor("expertStat.closedTicket", {
    id: "closed",
    header: "Закрытые",
    cell: (info) => <Typography color="#1b9c38">{info.getValue()}</Typography>,
  }),
];
