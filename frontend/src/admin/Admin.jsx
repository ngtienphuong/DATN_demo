import React from 'react'
import { Helmet, HelmetProvider} from 'react-helmet-async'
import Index from './Index'

function Admin() {
    return (
        <HelmetProvider>
            <Helmet>
                {/* <!-- Favicon --> */}
                <link rel="icon" type="image/x-icon" href="../admin/assets/img/favicon/favicon.ico" />

                {/* <!-- Fonts --> */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"
                />

                {/* <!-- Icons. Uncomment required icon fonts --> */}
                <link rel="stylesheet" href="../admin/assets/vendor/fonts/boxicons.css" />

                {/* <!-- Core CSS --> */}
                <link rel="stylesheet" href="../admin/assets/vendor/css/core.css" class="template-customizer-core-css" />
                <link rel="stylesheet" href="../admin/assets/vendor/css/theme-default.css" class="template-customizer-theme-css" />
                <link rel="stylesheet" href="../admin/assets/css/demo.css" />

                {/* <!-- Vendors CSS --> */}
                <link rel="stylesheet" href="../admin/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />

                <link rel="stylesheet" href="../admin/assets/vendor/libs/apex-charts/apex-charts.css" />

                {/* <!-- Page CSS --> */}
                <link rel="stylesheet" href="../admin/assets/style.css" />
                {/* <!-- Helpers --> */}
                <script src="../admin/assets/vendor/js/helpers.js"></script>

                {/* <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section --> */}
                {/* <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  --> */}
                <script src="../admin/assets/js/config.js"></script>
            </Helmet>
            <Index />
            <Helmet>
                {/* <!-- Core JS --> */}
                {/* <!-- build:js assets/vendor/js/core.js --> */}
                <script src="../admin/assets/vendor/libs/jquery/jquery.js"></script>
                <script src="../admin/assets/vendor/libs/popper/popper.js"></script>
                <script src="../admin/assets/vendor/js/bootstrap.js"></script>
                <script src="../admin/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>

                <script src="../admin/assets/vendor/js/menu.js"></script>
                {/* <!-- endbuild --> */}

                {/* <!-- Vendors JS --> */}
                <script src="../admin/assets/vendor/libs/apex-charts/apexcharts.js"></script>

                {/* <!-- Main JS --> */}
                <script src="../admin/assets/js/main.js"></script>

                {/* <!-- Page JS --> */}
                <script src="../admin/assets/js/dashboards-analytics.js"></script>

                {/* <!-- Place this tag in your head or just before your close body tag. --> */}
                <script async defer src="https://buttons.github.io/buttons.js"></script>
            </Helmet>
        </HelmetProvider>
    )
}

export default Admin