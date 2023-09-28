package com.example.uxj4alarma

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button

class CreateActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_create)

        val btn_cancelar: Button = findViewById(R.id.btn_cancelarRecordatorio)
        btn_cancelar.setOnClickListener {
            val intent_back_main = Intent(this@CreateActivity, MainActivity::class.java)
            startActivity(intent_back_main)
        }

        val btn_guardar: Button = findViewById(R.id.btn_guardarRecordatorio)
        btn_guardar.setOnClickListener {
            val intent_Detalle = Intent(this@CreateActivity, DetalleActivity::class.java)
            startActivity(intent_Detalle)
        }
    }
}