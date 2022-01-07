import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { Button } from "@material-ui/core";

import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import SimpleBottomNavigation from "../components/tabbar";
import { width } from "@mui/system";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12} sm={12}>
          <Slide left>
            <Paper
              className={classes.paper}
              style={
                {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: "80%",
                  margin: "auto"


                }
              }
            >
              <Bounce bottom>
                <p
                  style={{
                    fontFamily: 'Noto Nastaliq Urdu',
                    fontSize: "1.2em",
                    direction: "rtl",
                  }}
                >
                  یہ خالص اردو کی تیاری کے حوالے سے بنائی گئی ایک کوشش ہے۔ہمارے
                  ہاں تیاری کے اور بھی بہت سارے وسائل رائج ہیں جن سے طلبا فائدہ
                  بھی اٹھا رہے ہیں مگر ایک تو ان میں اغلاط کی درستی کا خیال نہیں
                  رکھا جاتا اور نہ تحقیق سے کام لیا جاتا جس سے بڑا نقصان طالب
                  علم کو یہ ہوتا ہے کہ وہ اس مطابق پیپر تو صحیح کر آتا ہے پر
                  نتائج بلکل الٹ ہوتے ہیں اور فیل ہونا ثابت ہوتا ہے۔جو لوگ یہ
                  کام کر رہے ہیں وہ صرف سرمائے کے حصول کا ذریعہ ہیں۔اور اس طرح
                  پیسے کمانے کے چکر میں کن کن کا نقصان ہو رہا ہے وہ سب آپ کے
                  سامنے ہے اور یہ کام ٹھہر نہیں رہا بل کہ اور زیادہ ہو رہا ہے۔
                  یہ ذریعہ اس نقطہ نظر سے تیار نہیں کیا گیا نہ اس کے پیچھے ایسی
                  سوچ ہے میں خود ادب کا طالب علم ہوں اور اس ضروت کو پیش نظر رکھ
                  کر طالب علموں کی کامیابی میں ایک طرح سے حصہ ہوگا۔اس میں جو بھی
                  متن یا سوال آپ کو ملے گا وہ پوری تحقیق اور اغلاط سے پاک ہو
                  گا۔مقصود صرف یہ ہے کہ سب کم وقت میں کامیابی حاصل کریں۔ آپ اس
                  میں کوئی غلطی سمجھتے ہیں تو کھلا محسوس کر کے ہم کو لکھیں۔ہم اس
                  کو درست کر لیں گئے۔ ذیشان ادیب
                </p>
              </Bounce>

            </Paper>
          </Slide>
        </Grid>
      </Grid>
      <SimpleBottomNavigation></SimpleBottomNavigation>
    </div>
  );
}
