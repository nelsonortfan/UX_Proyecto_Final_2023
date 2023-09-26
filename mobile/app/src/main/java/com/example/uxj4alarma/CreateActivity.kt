package com.example.uxj4alarma


import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.uxj4alarma.databinding.ActivityCreateBinding


class CreateActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val binding = ActivityCreateBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // boton para regresar a Home
        binding.btnCancelarRecordatorio.setOnClickListener {
            returnMainActivity()
        }
    }

    private fun returnMainActivity(){
        val intent2 = Intent(this, MainActivity::class.java)
        startActivity(intent2)
    }
}