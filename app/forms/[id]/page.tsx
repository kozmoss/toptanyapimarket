"use client";

// material-ui
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

// third-party
import { useFormik } from "formik";
import * as yup from "yup";

// project imports

// assets

import MainCard from "@/components/MainCard";
import Box from "@mui/material/Box";

const validationSchemas = {
  bayiOl: yup.object({
    firmName1: yup.string().required("Firma Adı zorunludur"),
    name1: yup.string().required("Ad zorunludur"),
    surname1: yup.string().required("Soyad zorunludur"),
    tel1: yup.number().required("Telefon zorunludur"),
    groups: yup.string().required("Ürün Grubu zorunludur"),
  }),
  teklifAl: yup.object({
    firmName2: yup.string().required("Firma Adı zorunludur"),
    tel2: yup.number().required("Telefon zorunludur"),
    city2: yup.string().required("Şehir zorunludur"),
    name2: yup.string().required("Ad zorunludur"),
    surname2: yup.string().required("Soyad zorunludur"),
  }),
};
// ==============================|| FORMS VALIDATION - ADDRESS ||============================== //

// eslint-disable-next-line @next/next/no-async-client-component
export default function GoogleMapAutocomplete({
  params,
}: {
  params: { id: number };
}) {
  const id = params.id;
  const formik = useFormik({
    initialValues:
      id == 1
        ? {
            firmName1: "",
            name1: "",
            surname1: "",
            tel1: "",
            groups: "",
          }
        : {
            firmName2: "",
            city2: "",
            name2: "",
            surname2: "",
            tel2: "",
          },
    validationSchema:
      id == 1 ? validationSchemas.bayiOl : validationSchemas.teklifAl,
    onSubmit: async (values) => {
      console.log("Submitted Values:", values);
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Tam ekran yüksekliği
        width: "100vw", // Tam ekran genişliği
      }}
    >
      <Grid container spacing={2.5} sx={{ maxWidth: 600 }}>
        {" "}
        {/* İsteğe bağlı genişlik */}
        <Grid item xs={12} md={12}>
          {id == 1 ? (
            <MainCard title="Bayi Ol">
              <form onSubmit={formik.handleSubmit} id="google-map-forms">
                <Grid container spacing={3.5}>
                  <Grid item xs={12} sm={12}>
                    {" "}
                    <Stack spacing={1}>
                      <InputLabel>Firma</InputLabel>
                      <TextField
                        id="firmName1"
                        name="firmName1"
                        placeholder="Firma Adı"
                        value={formik.values.firmName1}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.firmName1 &&
                          Boolean(formik.errors.firmName1)
                        }
                        helperText={
                          formik.touched.firmName1 && formik.errors.firmName1
                        }
                        fullWidth
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1}>
                      <InputLabel>Ad </InputLabel>
                      <TextField
                        id="name1"
                        name="name1"
                        placeholder="Ad"
                        value={formik.values.name1}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.name1 && Boolean(formik.errors.name1)
                        }
                        helperText={formik.touched.name1 && formik.errors.name1}
                        fullWidth
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1}>
                      <InputLabel>Soyad</InputLabel>
                      <TextField
                        id="surname1"
                        name="surname1"
                        placeholder="Soyad"
                        value={formik.values.surname1}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.surname1 &&
                          Boolean(formik.errors.surname1)
                        }
                        helperText={
                          formik.touched.surname1 && formik.errors.surname1
                        }
                        fullWidth
                      />
                    </Stack>
                  </Grid>{" "}
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1}>
                      <InputLabel>Telefon</InputLabel>
                      <TextField
                        id="tel1"
                        name="tel1"
                        placeholder="Tel"
                        value={formik.values.tel1}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.tel1 && Boolean(formik.errors.tel1)
                        }
                        helperText={formik.touched.tel1 && formik.errors.tel1}
                        fullWidth
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1}>
                      <InputLabel>Ürün Grubu</InputLabel>
                      <TextField
                        id="groups"
                        name="groups"
                        placeholder="Ürün Grubu"
                        value={formik.values.groups}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.groups && Boolean(formik.errors.groups)
                        }
                        helperText={
                          formik.touched.groups && formik.errors.groups
                        }
                        fullWidth
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Stack spacing={1}>
                      <InputLabel>Açıklama</InputLabel>
                      <TextField
                        id="outlined-multiline-static"
                        fullWidth
                        placeholder="Ürünleriniz hakkında genel bilgilendirme"
                        multiline
                        rows={5}
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="flex-end"
                      spacing={2}
                    >
                      <Button
                        variant="outlined"
                        color="secondary"
                        type="reset"
                        onClick={() => formik.resetForm()}
                      >
                        Reset
                      </Button>
                      <Button
                        variant="contained"
                        type="submit"
                        disabled={formik.isSubmitting}
                      >
                        Gönder
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </form>
            </MainCard>
          ) : (
            <MainCard title="Teklif Al">
              <form onSubmit={formik.handleSubmit} id="google-map-forms">
                <Grid container spacing={3.5}>
                  <Grid item xs={12} sm={12}>
                    {" "}
                    <Stack spacing={1}>
                      <InputLabel>Firma</InputLabel>
                      <TextField
                        id="firmName2"
                        name="firmName2"
                        placeholder="Firma Adı"
                        value={formik.values.firmName2}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.firmName2 && Boolean(formik.errors.firmName2)
                        }
                        helperText={
                          formik.touched.firmName2 && formik.errors.firmName2
                        }
                        fullWidth
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1}>
                      <InputLabel>City</InputLabel>
                      <TextField
                        id="city2"
                        name="city2"
                        placeholder="Şehir Giriniz"
                        value={formik.values.city2}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.city2 && Boolean(formik.errors.city2)
                        }
                        helperText={formik.touched.city2 && formik.errors.city2}
                        fullWidth
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1}>
                      <InputLabel>Ad</InputLabel>
                      <TextField
                        id="name2"
                        name="name2"
                        placeholder="Ad"
                        value={formik.values.name2}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.name2 && Boolean(formik.errors.name2)
                        }
                        helperText={formik.touched.name2 && formik.errors.name2}
                        fullWidth
                      />
                    </Stack>
                  </Grid>{" "}
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1}>
                      <InputLabel>Soyad</InputLabel>
                      <TextField
                        id="surname2"
                        name="surname2"
                        placeholder="Soyad"
                        value={formik.values.surname2}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.surname2 && Boolean(formik.errors.surname2)
                        }
                        helperText={
                          formik.touched.surname2 && formik.errors.surname2
                        }
                        fullWidth
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1}>
                      <InputLabel>Telefon</InputLabel>
                      <TextField
                        id="tel2"
                        name="tel2"
                        placeholder="Telefon"
                        value={formik.values.tel2}
                        error={
                          formik.touched.tel2 && Boolean(formik.errors.tel2)
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={formik.touched.tel2 && formik.errors.tel2}
                        fullWidth
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Stack spacing={1}>
                      <InputLabel>Açıklama</InputLabel>
                      <TextField
                        id="outlined-multiline-static"
                        fullWidth
                        placeholder="Multiline"
                        multiline
                        rows={5}
                        defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="flex-end"
                      spacing={2}
                    >
                      <Button
                        variant="outlined"
                        color="secondary"
                        type="reset"
                        onClick={() => formik.resetForm()}
                      >
                        Reset
                      </Button>
                      <Button
                        variant="contained"
                        type="submit"
                        disabled={formik.isSubmitting}
                      >
                        Gönder
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </form>
            </MainCard>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
