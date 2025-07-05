import { Button, ButtonGroup, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useAppSelector, type AppDispatch } from "../../store/store";
import { decrement, increment, incrementByAmount } from "./counterSlice";

export default function Counter() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <>
            <Typography>{count}</Typography>
            <ButtonGroup>
                <Button onClick={() => dispatch(increment())}>increment</Button>
                <Button onClick={() => dispatch(decrement())}>decrement</Button>
                <Button onClick={() => dispatch(incrementByAmount(5))}>incrementnByAmount</Button>
            </ButtonGroup>
        </>
    )
}