<script>
import axios from 'axios'

declare module 'vue' {
    interface ComponentCustomProperties {
        // Menambahkan tipe untuk variabel global
        $http: typeof axios
        $translate: (key: string) => string
    }
}
</script>