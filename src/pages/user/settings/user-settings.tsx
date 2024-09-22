import { image } from "../../../assets";
import Userlayouts from "../../../components/layouts/user";

const UserSettings = () => {
  return (
    <Userlayouts>
      <div className="w-1/4 bg-white p-4 rounded-lg drop-shadow-full">
        <div className="flex flex-col items-center">
          <img src={image.profile} alt="Profile Picture" className="w-full h-full mb-4" />
          <button className="bg-gray-100 border border-gray-300 px-4 py-2 rounded-lg text-gray-600">Pilih Foto</button>
          <p className="text-sm text-gray-500 mt-2 text-center">Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi file yang diperbolehkan: .JPG, .JPEG, .PNG</p>
          <button className="bg-white border border-gray-300 px-4 py-2 rounded-lg text-blue-600 mt-4">Buat Kata Sandi</button>
        </div>
      </div>

      <div className="w-3/4 bg-white p-4 ml-4 rounded-lg">
        <h2 className="text-base font-bold text-slate-500 mb-4">Ubah Biodata Diri</h2>

        <div className="flex flex-col gap-6">

          <div className="grid grid-cols-2 text-sm w-2/3">
            <p className="text-gray-600">Nama</p>
            <p className="text-gray-800 font-medium">Abya laxx <a href="#" className="text-green-500">Ubah</a></p>
          </div>

          <div className="grid grid-cols-2 text-sm w-2/3">
            <p className="text-gray-600">Tanggal Lahir</p>
            <a href="#" className="text-green-500">Tambah Tanggal Lahir</a>
          </div>

          <div className="grid grid-cols-2 text-sm w-2/3">
            <p className="text-gray-600">Jenis Kelamin</p>
            <a href="#" className="text-[#00AA5B]">Tambah Jenis Kelamin</a>
          </div>

        </div>

        <h2 className="text-base font-bold text-slate-500 mt-6 mb-4">Ubah Kontak</h2>

        <div className="flex flex-col gap-6">

          <div className="grid grid-cols-2 w-2/3">
            <p className="text-gray-600">Email</p>
            <p className="text-gray-800 font-medium">
              abyalaxx@gmail.com
              <span className="text-xs font-semibold text-[#00AA5B] bg-green-100 px-2 mx-2 py-1 rounded-full">
                Terverifikasi
              </span>
              <a href="#" className="text-[#00AA5B] text-sm">Ubah</a>
            </p>
          </div>

          <div className="grid grid-cols-2 w-2/3">
            <p className="text-gray-600">Nomor HP</p>
            <a href="#" className="text-green-600">Tambah Nomor HP</a>
          </div>
        </div>
      </div>
    </Userlayouts>
  )
};

export default UserSettings;