import useNotifHandler from "@/hooks/useNotifHandler";
import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";

const SnackAlert = () => {
    const {ctx, removeCtx} = useNotifHandler();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        removeCtx();
    };

    return (
        <Snackbar open={!!ctx} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={ctx?.severity} sx={{ width: '100%' }}>
                {ctx && `${ctx.message}`}
            </Alert>
        </Snackbar>
    );
};

export default SnackAlert;