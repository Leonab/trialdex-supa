const { NotifContext } = require("@/providers/NotificationProvider");
const { useContext } = require("react");

const useNotifHandler = () => {
    const { ctx, addCtx, removeCtx } = useContext(NotifContext);
    return { ctx, addCtx, removeCtx };
};

export default useNotifHandler;