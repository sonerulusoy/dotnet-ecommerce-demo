import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import PaymentsIcon from "@mui/icons-material/Payments";
import { Divider, Stack, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function Review() {
    const { getValues } = useFormContext();
    return (
        <Stack spacing={2} sx={{ mb: 3 }}>
            <Stack direction="column" divider={<Divider />} spacing={2} sx={{ my: 2 }}>
                <div>
                    <Typography
                        variant="subtitle2"
                        gutterBottom
                        sx={{ display: "flex", alignItems: "center", mb: 2, color: "text.secondary" }}>
                        <DeliveryDiningIcon color="secondary" sx={{ mr: 2 }} /> Teslimat Bilgileri
                    </Typography>
                    <Typography gutterBottom>{getValues("firstname")} {getValues("lastname")}</Typography>
                    <Typography gutterBottom>{getValues("phone")} </Typography>
                    <Typography gutterBottom>{getValues("addressline")} / {getValues("city")}</Typography>
                </div>
                <div>
                    <Typography
                        variant="subtitle2"
                        gutterBottom
                        sx={{ display: "flex", alignItems: "center", mb: 2, color: "text.secondary" }}>
                        <PaymentsIcon color="secondary" sx={{ mr: 2 }} /> Ödeme Bilgileri
                    </Typography>
                    <Typography gutterBottom>{getValues("card_name")}</Typography>
                    <Typography gutterBottom>{getValues("card_number")} </Typography>
                    <Typography gutterBottom>{getValues("card_expiry_date")}</Typography>
                </div>
            </Stack>
        </Stack>
    );
}