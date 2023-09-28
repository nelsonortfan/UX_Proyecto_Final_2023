package com.example.uxj4alarma

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button

class DetalleActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_detalle)

        val btn_edit: Button = findViewById(R.id.btn_cancelarDetailRecordatorio)
        btn_edit.setOnClickListener {
            val intent_back_detail = Intent(this@DetalleActivity, CreateActivity::class.java)
            startActivity(intent_back_detail)
        }

        val btn_Menu_ppal: Button = findViewById(R.id.btn_guardarDetailRecordatorio)
        btn_Menu_ppal.setOnClickListener {
            val intent_back_main = Intent(this@DetalleActivity, MainActivity::class.java)
            startActivity(intent_back_main)
        }
    }
}