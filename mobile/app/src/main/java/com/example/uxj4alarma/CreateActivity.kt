package com.example.uxj4alarma

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

class CreateActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_create)

        val boton2=findViewById<Button>(R.id.btn_cancelarRecordatorio)
        boton2.setOnClickListener {
            val intento2 = Intent(this, MainActivity::class.java)
            startActivity(intento2)
        }

    }
}